import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action, set } from '@ember/object';

export default class Visual extends Controller {
  @tracked toggleValue: boolean = false;
  @tracked disabled: boolean = true;
  @tracked selectedToggle: string = 'first';
  @tracked isChecked: boolean = true;
  @tracked radio1: boolean = true;
  @tracked radio2: boolean = false;
  @tracked media: any[] = [
    {
      key: 'article',
      active: false
    },
    {
      key: 'pin',
      active: false
    },
    {
      key: 'tweet',
      active: false
    },
    {
      key: 'instagram_media',
      active: false
    },
    {
      key: 'instagram_reel',
      active: false
    },
    {
      key: 'story',
      active: false
    },
    {
      key: 'youtube_video',
      active: false
    },
    {
      key: 'twitch_stream',
      active: false
    },
    {
      key: 'tiktok_video',
      active: false
    },
    {
      key: 'facebook_status',
      active: false
    }
  ];
  @tracked rating: number = 3;
  @tracked sliderValue: any = undefined;
  @tracked sliderValue2: number = 60;
  @tracked sliderValue3: number = 30;

  toggles = [
    {
      value: 'first',
      label: 'First'
    },
    {
      value: 'second',
      label: 'Second'
    }
  ];

  @action
  redirectTo(route: string) {
    console.log('Redirect to', route);
  }

  @action
  triggerSelection(value: string) {
    console.log('selected toggle value : ', value);
    this.selectedToggle = value;
  }

  @action
  onCheck(value: boolean) {
    this.isChecked = value;
  }

  @action
  onRadioBtnChange(radioBtnKey: any, newValue: string) {
    set(this, radioBtnKey, newValue);
  }

  @action
  toggleMedia(key: string) {
    console.log('toggled key', key);
    const index = this.media.findIndex((el) => el.key === key) as number;
    this.media[index].active = !this.media[index]?.active;
  }

  @action
  onCrossChipClick() {
    console.log('onCrossChipClick');
  }

  @action
  onRatingClick(rating: number) {
    console.log('You have rated with: ' + rating);
    this.rating = rating;
  }

  @action onChangeSlider(value: number) {
    this.sliderValue = value;
  }

  @action onChangeSlider2(value: number) {
    this.sliderValue2 = value;
  }

  @action onChangeSlider3(value: number) {
    this.sliderValue3 = value;
  }
}

declare module '@ember/controller' {
  interface Registry {
    visual: Visual;
  }
}
