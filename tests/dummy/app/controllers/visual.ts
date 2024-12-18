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
  @tracked avatars: { image: string; initials: string }[] = [
    {
      image: 'https://reachr-assets.s3.us-west-2.amazonaws.com/influencer-server/influencer/7219681.png',
      initials: 'TS'
    },
    { image: 'https://images.frandroid.com/wp-content/uploads/2019/11/jony-ive-apple.jpg', initials: 'JI' },
    {
      image: 'https://cdn.dribbble.com/users/485347/screenshots/2983299/8_most_influential_people_dribble-01.jpg',
      initials: 'SF'
    }
  ];
  @tracked media: { key: string; active: boolean }[] = [
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
  @tracked sliderValue: number | undefined = undefined;
  @tracked sliderValue2: number = 60;
  @tracked sliderValue3: number = 30;
  @tracked toggles: { value: string; label: string }[] = [
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
  redirectTo(route: string): void {
    console.log('Redirect to', route);
  }

  @action
  triggerSelection(value: string): void {
    console.log('selected toggle value : ', value);
    this.selectedToggle = value;
  }

  @action
  onCheck(value: boolean): void {
    this.isChecked = value;
  }

  @action
  onRadioBtnChange(radioBtnKey: 'radio1' | 'radio2', newValue: boolean): void {
    this[radioBtnKey] = newValue;
  }

  @action
  toggleMedia(key: string): void {
    console.log('toggled key', key);
    const index = this.media.findIndex((el) => el.key === key) as number;
    this.media[index]!.active = !this.media[index]?.active;
  }

  @action
  onCrossChipClick(): void {
    console.log('onCrossChipClick');
  }

  @action
  onRatingClick(rating: number): void {
    console.log('You have rated with: ' + rating);
    this.rating = rating;
  }

  @action onChangeSlider(value: number): void {
    this.sliderValue = value;
  }

  @action onChangeSlider2(value: number): void {
    this.sliderValue2 = value;
  }

  @action onChangeSlider3(value: number): void {
    this.sliderValue3 = value;
  }

  @action
  countDownAction(): void {
    console.log('countDownAction');
  }
}