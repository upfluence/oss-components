import Controller from '@ember/controller';

export default class Application extends Controller {
  items = [
    { name: 'hello' },
    { name: 'foo' },
    { name: 'bar' },
    { name: 'hello' },
    { name: 'foo' },
    { name: 'bar' },
    { name: 'hello' },
    { name: 'foo' },
    { name: 'bar' },
    { name: 'hello' },
    { name: 'foo' },
    { name: 'bar' },
    { name: 'hello' },
    { name: 'foo' },
    { name: 'bar' }
  ];

  onSearch(v: string) {
    console.log(v);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    application: Application;
  }
}
