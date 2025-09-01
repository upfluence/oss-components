import Component from '@glimmer/component';

export type HomeParameters = {
  logo: string;
  url: string;
};

interface OSSLayoutSidebarArgs {
  homeParameters?: HomeParameters;
  logo: string;
  homeURL?: string;
}

export default class OSSLayoutSidebar extends Component<OSSLayoutSidebarArgs> {}
