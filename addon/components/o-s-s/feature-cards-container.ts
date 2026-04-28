import { assert } from '@ember/debug';
import Component from '@glimmer/component';

import type { OSSFeatureCardArgs, OSSFeatureCardColorVariant, OSSFeatureCardShadowVariant } from './feature-card';
import { htmlSafe } from '@ember/template';

type OSSFeatureCardsContainerArgs = {
  cards: OSSFeatureCardArgs[];
};

type OSSFeatureCardsContainerComputedCard = OSSFeatureCardArgs & {
  className: string;
  style: ReturnType<typeof htmlSafe>;
};

const TWO_CARDS_OFFSET_X = '45%';
const THREE_CARD_OFFSET_X = '80%';
const ROTATION_ANGLE = 11.25;
const BASE_ITEM_CLASS = 'oss-feature-cards-container__item';

function getCardRotation(cardsCount: number, index: number): number {
  if (isCenterCard(cardsCount, index)) return 0;

  if (cardsCount === 2 || cardsCount === 3) return index === 0 ? -ROTATION_ANGLE : ROTATION_ANGLE;

  assert('[OSS::FeatureCardsContainer] Internal layout configuration mismatch', false);
}

function getCardOffsetX(cardsCount: number, index: number): string {
  if (isCenterCard(cardsCount, index)) return '0';

  if (cardsCount === 2) return index === 0 ? `-${TWO_CARDS_OFFSET_X}` : TWO_CARDS_OFFSET_X;
  if (cardsCount === 3) return index === 0 ? `-${THREE_CARD_OFFSET_X}` : THREE_CARD_OFFSET_X;

  assert('[OSS::FeatureCardsContainer] Internal layout configuration mismatch', false);
}

function isCenterCard(cardsCount: number, index: number): boolean {
  return cardsCount === 1 || (cardsCount === 3 && index === 1);
}

function getDefaultCardColorVariant(cardsCount: number, index: number): OSSFeatureCardColorVariant {
  if (isCenterCard(cardsCount, index)) return 'violet';

  if (cardsCount === 2 || cardsCount === 3) return index === 0 ? 'blue' : 'yellow';

  assert('[OSS::FeatureCardsContainer] Internal layout configuration mismatch', false);
}

function getDefaultCardShadowVariant(cardsCount: number, index: number): OSSFeatureCardShadowVariant {
  if (isCenterCard(cardsCount, index)) return 'lg';

  if (cardsCount === 2 || cardsCount === 3) return 'sm';

  assert('[OSS::FeatureCardsContainer] Internal layout configuration mismatch', false);
}

export default class OSSFeatureCardsContainer extends Component<OSSFeatureCardsContainerArgs> {
  constructor(owner: unknown, args: OSSFeatureCardsContainerArgs) {
    super(owner, args);

    assert('[OSS::FeatureCardsContainer] The @cards parameter is mandatory', Array.isArray(args.cards));
    assert(
      '[OSS::FeatureCardsContainer] @cards must contain between 1 and 3 cards',
      args.cards.length >= 1 && args.cards.length <= 3
    );
  }

  get cardsWithLayout(): OSSFeatureCardsContainerComputedCard[] {
    const cards = this.args.cards ?? [];

    return cards.map((card, index) => {
      const cardCount = cards.length;
      const colorVariant = card.colorVariant ?? getDefaultCardColorVariant(cardCount, index);
      const shadowVariant = card.shadowVariant ?? getDefaultCardShadowVariant(cardCount, index);
      const className = isCenterCard(cardCount, index) ? `${BASE_ITEM_CLASS}--center` : '';
      const style = htmlSafe(
        `transform: translateX(${getCardOffsetX(cardCount, index)}) rotate(${getCardRotation(cardCount, index)}deg);`
      );

      return {
        ...card,
        colorVariant,
        shadowVariant,
        className,
        style
      };
    });
  }
}
