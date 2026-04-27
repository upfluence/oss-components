import { assert } from '@ember/debug';
import Component from '@glimmer/component';

import type { OSSFeatureCardArgs } from './feature-card';

type OSSFeatureCardsContainerArgs = {
  cards: Pick<OSSFeatureCardArgs, 'title' | 'description' | 'image'>[];
};

type OSSFeatureCardsContainerComputedCard = Required<OSSFeatureCardArgs> & {
  isCenter: boolean;
  style: string;
};

const TWO_CARDS_OFFSET_X = '45%';
const THREE_CARD_OFFSET_X = '80%';
const ROTATION_ANGLE = 11.25;

const CARDS_LAYOUT = {
  2: [
    {
      colorVariant: 'blue',
      shadowVariant: 'sm',
      rotation: -ROTATION_ANGLE,
      offsetX: `-${TWO_CARDS_OFFSET_X}`,
      isCenter: false
    },
    {
      colorVariant: 'yellow',
      shadowVariant: 'sm',
      rotation: ROTATION_ANGLE,
      offsetX: TWO_CARDS_OFFSET_X,
      isCenter: false
    }
  ],
  3: [
    {
      colorVariant: 'blue',
      shadowVariant: 'sm',
      rotation: -ROTATION_ANGLE,
      offsetX: `-${THREE_CARD_OFFSET_X}`,
      isCenter: false
    },
    { colorVariant: 'violet', shadowVariant: 'lg', rotation: 0, offsetX: '0', isCenter: true },
    {
      colorVariant: 'yellow',
      shadowVariant: 'sm',
      rotation: ROTATION_ANGLE,
      offsetX: THREE_CARD_OFFSET_X,
      isCenter: false
    }
  ]
} as const satisfies Record<
  number,
  (Pick<OSSFeatureCardsContainerComputedCard, 'colorVariant' | 'shadowVariant' | 'isCenter'> & {
    rotation: number;
    offsetX: string;
  })[]
>;

export default class OSSFeatureCardsContainer extends Component<OSSFeatureCardsContainerArgs> {
  constructor(owner: unknown, args: OSSFeatureCardsContainerArgs) {
    super(owner, args);

    assert('[OSS::FeatureCardsContainer] The @cards parameter is mandatory', Array.isArray(args.cards));
    assert(
      '[OSS::FeatureCardsContainer] @cards must contain exactly 2 or 3 cards',
      args.cards.length === 2 || args.cards.length === 3
    );
  }

  get cardsWithLayout(): OSSFeatureCardsContainerComputedCard[] {
    const layout = CARDS_LAYOUT[this.args.cards.length as keyof typeof CARDS_LAYOUT];
    assert('[OSS::FeatureCardsContainer] Internal layout configuration mismatch', !!layout);

    return this.args.cards.map((card, index) => {
      const cardLayout = layout[index];
      assert('[OSS::FeatureCardsContainer] Internal layout configuration mismatch', !!cardLayout);

      const { colorVariant, shadowVariant, isCenter, rotation, offsetX } = cardLayout;

      return {
        ...card,
        colorVariant,
        shadowVariant,
        isCenter,
        style: `transform: translateX(${offsetX}) rotate(${rotation}deg);`
      };
    });
  }
}
