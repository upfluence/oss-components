import '@glint/environment-ember-loose';
import '@gavant/glint-template-types/types/ember-intl/helpers/t';
import '@gavant/glint-template-types/types/ember-truth-helpers/and';
import '@gavant/glint-template-types/types/ember-truth-helpers/eq';
import '@gavant/glint-template-types/types/ember-truth-helpers/not';
import '@gavant/glint-template-types/types/ember-truth-helpers/or';

import type RenderModifiersRegistry from '@ember/render-modifiers/template-registry';
import TranslationHelper from 'ember-intl/helpers/t';
import And from 'ember-truth-helpers/helpers/and';
import Eq from 'ember-truth-helpers/helpers/eq';
import Not from 'ember-truth-helpers/helpers/not';
import Or from 'ember-truth-helpers/helpers/or';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry extends RenderModifiersRegistry {
    t: typeof TranslationHelper;
    and: typeof And;
    eq: typeof Eq;
    not: typeof Not;
    or: typeof Or;
  }
}
