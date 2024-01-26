import Component from '@glimmer/component';
import { assert } from '@ember/debug';

interface OSSTogglableSectionSignature {
  Args: {
    title: string;
    toggled: boolean;
    iconUrl?: string;
    icon?: string;
    subtitle?: string;
    onChange(value: boolean): void;
  };
  Blocks: {
    contents: [];
  };
  Element: HTMLDivElement;
}

export default class OSSTogglableSectionComponent extends Component<OSSTogglableSectionSignature> {
  constructor(owner: unknown, args: OSSTogglableSectionSignature['Args']) {
    super(owner, args);

    assert('[OSS::TogglableSection] The @title parameter is mandatory', typeof args.title === 'string');
    assert('[OSS::TogglableSection] The @toggled parameter is mandatory', typeof args.toggled === 'boolean');
    assert('[OSS::TogglableSection] The @onChange function is mandatory', args.onChange);
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'OSS::TogglableSection': typeof OSSTogglableSectionComponent;
    'o-s-s/togglable-section': typeof OSSTogglableSectionComponent;
  }
}
