import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

import ToastService from '@upfluence/oss-components/services/toast';

type TableData = {
  header: { title: string; class?: string }[];
  data: { content: string; class?: string }[];
};

export default class Data extends Controller {
  @service declare toast: ToastService;

  @tracked shopUrl: string = '';
  @tracked shopifyDomain: string = '';
  @tracked revealed: boolean = false;
  @tracked starRatingValue: number = 3;

  loop: null[] = Array(15);

  subdomainRegex: RegExp = /^[a-zA-Z0-9]+[a-zA-Z0-9-._]*[a-zA-Z0-9]+$/;

  tableDemo: TableData = {
    header: [
      { title: 'Title 0' },
      { title: 'Title 1', class: 'upf-table__cell--fixed upf-table__tag-cell' },
      { title: 'Title 2', class: 'upf-table__cell--fixed' },
      { title: 'Title 3', class: 'upf-table__cell--fixed' },
      { title: '', class: 'upf-table__cell--action' }
    ],
    data: [
      { content: 'Content 1' },
      { content: 'Content 2' },
      { content: 'Content 3' },
      { content: 'Content 4', class: 'upf-table__cell--fixed' },
      { content: '', class: 'upf-table__cell--action' }
    ]
  };

  @action
  onUrlInputChange(newValue: string, isValid: boolean): void {
    console.log('newValue : ' + newValue);
    console.log('Value test against regext valid ? ' + isValid);
    if (isValid) {
      this.shopUrl = newValue.replace('https://', '').replace('http://', '');
    }
  }

  @action
  onAttributePanelSave(): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 300);
    });
  }

  @action
  onAttributePanelCancel(): void {
    console.log('Attributes panel cancel');
  }

  @action
  onAttributePanelEdit(): void {
    console.log('Attributes panel edition');
  }

  @action
  onRemove(): Promise<string> {
    console.log('on remove');
    return new Promise((res) => {
      setTimeout(() => {
        this.revealed = true;
        return res('success');
      }, 1000);
    });
  }

  @action
  onRevealEmailError(): Promise<string> {
    console.log('on reveal email error');
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.toast.error('There was an error retrieving the email address. Try again later.', 'Error');
        return rej('failed');
      }, 1000);
    });
  }

  @action
  onRevealEmailSuccess(): Promise<string> {
    console.log('on reveal email success');
    return new Promise((res) => {
      setTimeout(() => {
        this.revealed = true;
        return res('success');
      }, 1000);
    });
  }
}
