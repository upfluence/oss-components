import { assert } from '@ember/debug';
import Component from '@glimmer/component';

import type { OSSFeatureCardArgs, OSSFeatureCardColorVariant, OSSFeatureCardShadowVariant } from './feature-card';

type OSSFeatureCardsContainerArgs = {
  cards: OSSFeatureCardArgs[];
};

export default class OSSFeatureCardsContainer extends Component<OSSFeatureCardsContainerArgs> {
  constructor(owner: unknown, args: OSSFeatureCardsContainerArgs) {
    super(owner, args);

    assert('[OSS::FeatureCardsContainer] The @cards parameter is mandatory', Array.isArray(args.cards));
    assert(
      '[OSS::FeatureCardsContainer] @cards must contain between 1 and 3 cards',
      args.cards.length >= 1 && args.cards.length <= 3
    );
  }

  get cardsWithComputedVariants(): OSSFeatureCardArgs[] {
    const cards = this.args.cards ?? [];

    return cards.map((card, index) => {
      const cardCount = cards.length;
      const colorVariant = card.colorVariant ?? this.getDefaultCardColorVariant(cardCount, index);
      const shadowVariant = card.shadowVariant ?? this.getDefaultCardShadowVariant(cardCount, index);

      return {
        ...card,
        colorVariant,
        shadowVariant
      };
    });
  }

  private getDefaultCardShadowVariant(cardsCount: number, index: number): OSSFeatureCardShadowVariant {
    if (this.isCenterCard(cardsCount, index)) return 'lg';

    return 'sm';
  }

  private getDefaultCardColorVariant(cardsCount: number, index: number): OSSFeatureCardColorVariant {
    if (this.isCenterCard(cardsCount, index)) return 'violet';

    return index === 0 ? 'blue' : 'yellow';
  }

  private isCenterCard(cardsCount: number, index: number): boolean {
    return cardsCount === 1 || (cardsCount === 3 && index === 1);
  }
}
