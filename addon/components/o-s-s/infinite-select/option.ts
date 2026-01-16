import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import type { IntlService } from 'ember-intl';

import type { OSSTagArgs } from '../tag';
import type { OSSAvatarArgs } from '../avatar';
import type { OSSBadgeArgs } from '../badge';

import { isSafeString } from '@upfluence/oss-components/utils';
import type { OSSIconArgs } from '@upfluence/oss-components/components/o-s-s/icon';
import type { CountryData } from '@upfluence/oss-components/utils/country-codes';

type IconSpec = OSSIconArgs & {
  tooltip?: { title: ReturnType<IntlService['t']>; placement?: string };
};

interface OSSInfiniteSelectOptionComponentSignature {
  Args: {
    prefixAvatar?: OSSAvatarArgs;
    prefixBadge?: OSSBadgeArgs;
    prefixIcon?: IconSpec;
    prefixCountry?: CountryData['alpha2'];

    title: ReturnType<IntlService['t']>;
    subtitle?: ReturnType<IntlService['t']>;
    icon?: IconSpec;

    suffixHint?: ReturnType<IntlService['t']>;
    suffixTag?: OSSTagArgs;
    suffixIcon?: IconSpec;

    selectionType?: 'multiple' | 'single';
    selected?: boolean;
    disabled?: boolean;
    onSelect(value: boolean): void;
  };

  Blocks: {
    prefix: [];
    suffix: [];
  };
}

export default class OSSInfiniteSelectOptionComponent extends Component<OSSInfiniteSelectOptionComponentSignature> {
  constructor(owner: unknown, args: OSSInfiniteSelectOptionComponentSignature['Args']) {
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
  onSelect(value: boolean): void {
    if (this.args.disabled) return;
    this.args.onSelect(value);
  }
}
