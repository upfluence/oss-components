import { setComponentTemplate } from '@ember/component';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

import type { IntlService } from 'ember-intl';

interface Globals {}

interface StorybookArgs {
  story: {
    template: any;
    context: Record<string, unknown>;
  };
  globals: Globals;
}

export default class StorybookComponent extends Component<StorybookArgs> {
  @service declare intl: IntlService;

  constructor(owner: any, args: StorybookArgs) {
    super(owner, args);

    this.intl.setLocale('en-us');
  }

  get storyComponent() {
    class StoryComponent extends Component {}

    Object.keys(this.storyComponentArgs).forEach((key) => {
      Object.defineProperty(StoryComponent.prototype, key, {
        get() {
          return (this as any).args.__ctx?.[key];
        }
      });
    });

    setComponentTemplate(this.args.story.template, StoryComponent);

    return StoryComponent;
  }

  get storyComponentArgs() {
    return this.args.story.context ?? {};
  }
}
