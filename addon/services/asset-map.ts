import { warn } from '@ember/debug';
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export interface AssetManifest {
  assets: Record<string, string>;
  prepend: string;
  rootURL?: string;
  enabled?: boolean;
}

export function validateAssetManifest(value: unknown): AssetManifest {
  const manifest = value as AssetManifest | null;
  if (
    !manifest ||
    !manifest.assets ||
    typeof manifest.assets !== 'object' ||
    Array.isArray(manifest.assets) ||
    Object.values(manifest.assets).some((url) => typeof url !== 'string') ||
    typeof manifest.prepend !== 'string' ||
    (manifest.rootURL !== undefined && typeof manifest.rootURL !== 'string') ||
    (manifest.enabled !== undefined && typeof manifest.enabled !== 'boolean')
  ) {
    throw new Error('[upfluence asset-map] Invalid consumer manifest.');
  }
  return manifest;
}

export class AssetURLTable {
  private urls: Map<string, string>;
  private resolved: Set<string>;
  private warned = new Set<string>();
  private prefix: string;
  private enabled: boolean;

  constructor(manifest: AssetManifest) {
    validateAssetManifest(manifest);
    this.prefix = manifest.prepend || manifest.rootURL || '/';
    this.enabled = manifest.enabled !== false;
    this.urls = new Map(Object.entries(manifest.assets).map(([key, value]) => [key.replace(/^\/+/, ''), value]));
    for (const url of Object.values(manifest.assets)) {
      const key = url.replace(/^\/+/, '');
      if (!this.urls.has(key)) this.urls.set(key, url);
    }
    this.resolved = new Set([...this.urls.values()].map((url) => this.withPrefix(url)));
  }

  resolve(name: string): string {
    if (
      !name ||
      this.isAbsolute(name) ||
      this.resolved.has(name) ||
      (this.prefix !== '/' && name.startsWith(this.prefix))
    ) {
      return name;
    }
    const key = name.replace(/^\/+/, '');
    const mapped = this.urls.get(key);
    if (!mapped && this.enabled && !this.warned.has(key)) {
      this.warned.add(key);
      warn(`[upfluence asset-map] No manifest entry for "${name}".`, false, {
        id: 'upfluence.asset-map.missing-entry'
      });
    }
    return this.withPrefix(mapped ?? key);
  }

  private isAbsolute(url: string): boolean {
    return /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(url);
  }

  private withPrefix(url: string): string {
    if (this.isAbsolute(url) || url.startsWith(this.prefix)) return url;
    return `${this.prefix.replace(/\/+$/, '')}/${url.replace(/^\/+/, '')}`;
  }
}

export default class AssetMapService extends Service {
  @tracked private table?: AssetURLTable;

  constructor(...args: ConstructorParameters<typeof Service>) {
    super(...args);

    const meta =
      typeof document === 'undefined'
        ? null
        : document.querySelector<HTMLMetaElement>('meta[name="upfluence:asset-map"]');

    if (meta?.content && meta.content !== '__UPFLUENCE_ASSET_MAP__') {
      this.configure(validateAssetManifest(JSON.parse(decodeURIComponent(meta.content))));
    }
  }

  // Also provides the build-independent seam for a future Vite integration.
  configure(manifest: AssetManifest): void {
    this.table = new AssetURLTable(manifest);
  }

  resolve(name: string): string {
    if (!this.table) {
      throw new Error(
        '[upfluence asset-map] Missing consumer manifest. Wrap the consuming app build with injectAssetMap.'
      );
    }

    return this.table.resolve(name);
  }
}

declare module '@ember/service' {
  interface Registry {
    'asset-map': AssetMapService;
  }
}
