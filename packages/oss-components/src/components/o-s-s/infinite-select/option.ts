import { assert } from '@ember/debug';
import { action } from '@ember/object';
import type Owner from '@ember/owner';
import Component from '@glimmer/component';

import type { IntlService } from 'ember-intl';

import { isSafeString } from '../../../utils';
import type { CountryData } from '../../../utils/country-codes';
import type { OSSAvatarArgs } from '../avatar';
import type { OSSBadgeArgs } from '../badge';
import type { OSSIconArgs } from '../icon';
import type { OSSTagArgs } from '../tag';

type IconSpec = OSSIconArgs & {
  tooltip?: { title: ReturnType<IntlService['t']>; placement?: string };
};

interface OSSInfiniteSelectOptionComponentSignature {
  Args: {
    /** Optional avatar displayed before the title. Object with properties: image, initials, size, loading */
    prefixAvatar?: OSSAvatarArgs;
    /** Optional badge displayed before the title. Object with properties: icon, image, text, skin, plain, size */
    prefixBadge?: OSSBadgeArgs;
    /** Optional icon displayed before the title. Object with properties: icon, style, tooltip */
    prefixIcon?: IconSpec;
    /** Optional country flag displayed before the title. Use alpha2 country code (e.g., "US", "FR") */
    prefixCountry?: CountryData['alpha2'];

    /** The main title text of the option */
    title: ReturnType<IntlService['t']>;
    /** Optional subtitle text displayed below the title */
    subtitle?: ReturnType<IntlService['t']>;
    /** Optional icon displayed after the title. Object with properties: icon, style, tooltip */
    icon?: IconSpec;

    /** Optional hint text displayed at the end of the option */
    suffixHint?: ReturnType<IntlService['t']>;
    /**
     * Optional tag displayed at the end of the option. Object with properties: label, skin, icon, suffixIcon,
     * hasEllipsis, plain, htmlSafe, size
     */
    suffixTag?: OSSTagArgs;
    /** Optional icon displayed at the very end of the option. Object with properties: icon, style, tooltip */
    suffixIcon?: IconSpec;

    /**
     * The selection type - single selection with radio behavior or multiple selection with checkboxes
     * @default 'single'
     */
    selectionType?: 'multiple' | 'single';
    /**
     * Whether the option is currently selected
     * @default false
     */
    selected?: boolean;
    /**
     * Whether the option is disabled and cannot be selected
     * @default false
     */
    disabled?: boolean;
    /** Callback function called when the option is selected/deselected */
    onSelect(value: boolean, event?: PointerEvent): void;
  };

  Blocks: {
    /** Custom content rendered before the title, after the prefix avatar, badge, icon and country flag */
    prefix: [];
    /** Custom content rendered at the end of the option, before the check mark of a selected single option */
    suffix: [];
  };

  Element: HTMLElement;
}

export default class OSSInfiniteSelectOptionComponent extends Component<OSSInfiniteSelectOptionComponentSignature> {
  constructor(owner: Owner, args: OSSInfiniteSelectOptionComponentSignature['Args']) {
    super(owner, args);
    assert(
      '[component][OSS::InfiniteSelect::Option] @title is required',
      typeof args.title === 'string' || isSafeString(args.title)
    );
    assert(
      '[component][OSS::InfiniteSelect::Option] The parameter @onSelect of type function is mandatory',
      typeof this.args.onSelect === 'function'
    );
  }

  get computedClasses(): string {
    const classes = ['oss-infinite-select-option'];
    if (this.isSelectionMultiple) {
      classes.push('oss-infinite-select-option--multiple');
    }
    if (this.isSelectionSingle) {
      classes.push('oss-infinite-select-option--single');
    }
    if (this.args.selected) {
      classes.push('oss-infinite-select-option--selected');
    }
    if (this.args.disabled) {
      classes.push('oss-infinite-select-option--disabled');
    }
    return classes.join(' ');
  }

  get selectionType(): 'multiple' | 'single' {
    return this.args.selectionType ?? 'single';
  }

  get isSelectionMultiple(): boolean {
    return this.selectionType === 'multiple';
  }

  get isSelectionSingle(): boolean {
    return this.selectionType === 'single';
  }

  get selected(): boolean {
    return this.args.selected ?? false;
  }

  @action
  onSelect(value: boolean, event?: PointerEvent): void {
    event?.stopPropagation();

    if (this.args.disabled) return;
    this.args.onSelect(value, event);
  }
}
