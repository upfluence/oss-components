import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import type RouterService from '@ember/routing/router-service';

import type { GroupItem } from '@upfluence/oss-components/components/o-s-s/layout/sidebar/group';
import type { SidebarItemTag } from '@upfluence/oss-components/components/o-s-s/layout/sidebar/item';
import type ToastService from '@upfluence/oss-components/services/toast';

export default class ApplicationController extends Controller {
  @service declare toast: ToastService;
  @service declare router: RouterService;

  featuredTag: SidebarItemTag = { label: '9+', skin: 'danger', plain: true };
  newFeaturesTag: SidebarItemTag = { label: '3', skin: 'danger', plain: true };

  get sidebarGroupItems(): GroupItem[] {
    return [
      {
        icon: 'far fa-search',
        label: 'Search',
        hasNotifications: false,
        active: false,
        link: 'index'
      },
      {
        icon: 'far fa-chart-bar',
        label: 'Analytics',
        hasNotifications: false,
        active: false,
        link: 'data'
      },
      {
        icon: 'far fa-cog',
        label: 'Settings',
        hasNotifications: false,
        active: false,
        link: 'extra'
      }
    ];
  }

  @action
  redirectTo(route: string): void {
    console.log('redirectTo', route);
  }

  @action
  onClick(): void {
    this.toast.success('Item clicked!', '');
  }
}
