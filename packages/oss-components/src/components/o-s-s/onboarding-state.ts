import { assert } from '@ember/debug';
import type Owner from '@ember/owner';
import Component from '@glimmer/component';

import { isSafeString } from '../../utils';

interface OSSOnboardingStateComponentSignature {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export default class OSSOnboardingStateComponent extends Component<OSSOnboardingStateComponentSignature> {
  constructor(owner: Owner, args: OSSOnboardingStateComponentSignature) {
    super(owner, args);

    assert(
      '[OSS::OnboardingState] The @title parameter is mandatory',
      typeof args.title === 'string' || isSafeString(args.title)
    );
    assert(
      '[OSS::OnboardingState] The @subtitle parameter is mandatory',
      typeof args.subtitle === 'string' || isSafeString(args.subtitle)
    );
    assert(
      '[OSS::OnboardingState] The @imageUrl parameter is mandatory',
      typeof args.imageUrl === 'string' || isSafeString(args.imageUrl)
    );
  }
}
