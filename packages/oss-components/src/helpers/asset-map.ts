import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

import type AssetMapService from '../services/asset-map';

export default class AssetMapHelper extends Helper {
  @service('asset-map') declare assetMap: AssetMapService;

  compute([name]: [string?]): string | undefined {
    return name ? this.assetMap.resolve(name) : undefined;
  }
}
