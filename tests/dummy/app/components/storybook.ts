import { setComponentTemplate } from '@ember/component';
import Component from '@glimmer/component';

interface StorybookArgs {
  story: {
    template: any;
    context: Record<string, unknown>;
  };
  globals: Record<string, unknown>;
}

export default class StorybookComponent extends Component<StorybookArgs> {
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
