import {
  GetCacheClientProtocol,
  CacheContent,
} from "@/data/protocols/cache/GetCacheClientProtocol";

export class LocalStorageGetCacheClienteAdapter
  implements GetCacheClientProtocol
{
  getItem(key: string): CacheContent {
    const cacheResult = localStorage.getItem(key);

    return this.adapt(cacheResult);
  }

  private adapt(cacheResult?: string | null): CacheContent {
    return {
      content: cacheResult || JSON.stringify([]),
    };
  }
}
