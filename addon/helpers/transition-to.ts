import { getOwner } from '@ember/application';
import Helper from '@ember/component/helper';
import { assert } from '@ember/debug';

type TransitionToHelperArgs = {
  route: string;
  model: any;
  models: any[];
  queryParams: { [key: string]: any };
};

export default class extends Helper {
  compute(_: any[], named: TransitionToHelperArgs) {
    const { route, model, models, queryParams } = named;

    assert('[helper][OSS::transition-to] route argument is mandatory', typeof route === 'string');
    assert(
      '[helper][OSS::transition-to] only one of model or models argument must be provided',
      model || models ? [model, models].filter((x) => x).length === 1 : true
    );
    assert(
      '[helper][OSS::transition-to] queryParams argument must be an object',
      queryParams ? typeof queryParams === 'object' : true
    );

    const router = getOwner(this).lookup('service:router');

    return () => {
      if (model) {
        router.transitionTo(route, model, { queryParams });
      } else if (models) {
        router.transitionTo(route, ...models, { queryParams });
      } else {
        router.transitionTo(route, { queryParams: queryParams || {} });
      }
    };
  }
}
