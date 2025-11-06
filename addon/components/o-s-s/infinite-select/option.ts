import Component from '@glimmer/component';
import type { OSSTagArgs } from '../tag';
import type { IntlService } from 'ember-intl';
import type { CountryData } from '@upfluence/oss-components/utils/country-codes';
import type { OSSAvatarArgs } from '../avatar';
import type { OSSBadgeArgs } from '../badge';

//type Avatar
type IconSpec = {
  name: string;
  tooltip?: { title: ReturnType<IntlService['t']>; subtitle?: ReturnType<IntlService['t']>; placement?: string };
};

interface OSSInfiniteSelectOptionComponentSignature {
  Args: {
    prefixAvatar?: OSSAvatarArgs;
    prefixBadge?: OSSBadgeArgs;
    prefixIcon?: IconSpec;
    prefixCountry?: CountryData['alpha2'];

    title: string;
    subtitle?: string;
    icon?: IconSpec;

    suffixHint?: ReturnType<IntlService['t']>;
    suffixTag?: OSSTagArgs;
    suffixIcon?: IconSpec;

    selectionType?: 'multiple' | 'single';
    selected?: boolean;
    disabled?: boolean;
  };

  Blocks: {
    prefix: [];
    suffix: [];
  };
}

export default class OSSInfiniteSelectOptionComponent extends Component<OSSInfiniteSelectOptionComponentSignature> {}
