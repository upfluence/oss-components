import Controller from '@ember/controller';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import BaseUploader from '@upfluence/oss-components/services/base-uploader';
import type Uploader from '@upfluence/oss-components/types/uploader';
import { type FileArtifact, type UploadRequest } from '@upfluence/oss-components/types/uploader';

export class MockUploader extends BaseUploader {
  mode = 'success';

  upload(request: UploadRequest, validationRules = []) {
    console.log(request);

    const validations = this.validate(request, validationRules || []);

    if (!validations.passes) {
      request.onValidationFailure?.(validations);
      return;
    }

    let progressStep = 0;
    const interval = setInterval(() => {
      const progressEvent = new ProgressEvent('progress', { total: 1000, loaded: progressStep });
      request.onProgress?.(progressEvent);
      progressStep += 250;

      if (progressStep === 1000) {
        if (this.mode === 'success') {
          request.onSuccess?.({
            key: 'uploader/foo.png',
            filename: 'Foo.png',
            url: 'https://oss-components.upfluence.co/uploader/foo.png',
            content_type: 'png',
            size: 1000
          });
        } else {
          request.onFailure?.({
            payload: {}
          });
        }

        clearInterval(interval);
        this.mode = 'success';
      }
    }, 1000);
  }

  get url(): string {
    return 'https://oss-components.upfluence.co';
  }
}

interface NavTab {
  label?: string;
  icon?: string;
  infoCircle?: boolean;
  notificationDot?: boolean;
  selected?: boolean;
  disabled?: boolean;
}

export default class Extra extends Controller {
  @tracked uploader: Uploader = new MockUploader();
  @tracked file: FileArtifact = {
    key: 'key',
    filename: 'upfluence-blue-logo.svg',
    url: 'https://upfluence-common.s3.amazonaws.com/pictograms/upfluence-blue-logo.svg',
    content_type: 'svg',
    size: 517
  };
  @tracked tabArrayNavTab: NavTab[] = [
    { label: 'Tab', icon: 'far fa-thumbs-up' },
    { label: 'Tab2', icon: 'far fa-thumbs-up' },
    { label: 'Tab3' },
    { icon: 'far fa-thumbs-up' },
    { label: 'Tab', icon: 'far fa-thumbs-up', infoCircle: true },
    { label: 'Tab', icon: 'far fa-thumbs-up', infoCircle: true, notificationDot: true },
    { label: 'Tab', icon: 'far fa-thumbs-up', infoCircle: true, notificationDot: true, selected: true },
    { label: 'Tab', icon: 'far fa-thumbs-up', infoCircle: true, notificationDot: true, disabled: true },
    { label: 'Tab', icon: 'far fa-thumbs-up', infoCircle: true, notificationDot: true, selected: true, disabled: true }
  ];

  @action
  onSelectionNavTab(selectedTab: {}): void {
    console.log('onSelectionNavTab : ', selectedTab);
    this.tabArrayNavTab.forEach((element) => {
      if (element === selectedTab) {
        set(element, 'selected', true);
      } else {
        set(element, 'selected', false);
      }
    });
  }

  @action
  onEdition(): void {
    console.log('edition');
  }

  @action
  onDeletion(): void {
    console.log('deletion');
  }

  @action
  onUploadSuccess(artifact: FileArtifact): void {
    console.log('Successfully uploaded', artifact);
  }
}
