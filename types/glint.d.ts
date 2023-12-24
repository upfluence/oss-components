import '@glint/environment-ember-loose';
import '@gavant/glint-template-types/types/ember-intl/helpers/t';

import type RenderModifiersRegistry from '@ember/render-modifiers/template-registry';
import TranslationHelper from 'ember-intl/helpers/t';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry extends RenderModifiersRegistry {
    t: typeof TranslationHelper;
  }
}
