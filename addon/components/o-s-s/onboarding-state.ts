import Component from '@glimmer/component';
import { assert } from '@ember/debug';

interface OSSOnboardingStateComponentSignature {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export default class OSSOnboardingStateComponent extends Component<OSSOnboardingStateComponentSignature> {
  constructor(owner: unknown, args: OSSOnboardingStateComponentSignature) {
    super(owner, args);

    assert(
      '[OSS::OnboardingState] The @title parameter is mandatory',
      typeof args.title === 'string' && args.title.length > 0
    );
    assert(
      '[OSS::OnboardingState] The @subtitle parameter is mandatory',
      typeof args.subtitle === 'string' && args.subtitle.length > 0
    );
    assert(
      '[OSS::OnboardingState] The @imageUrl parameter is mandatory',
      typeof args.imageUrl === 'string' && args.imageUrl.length > 0
    );
  }
}
