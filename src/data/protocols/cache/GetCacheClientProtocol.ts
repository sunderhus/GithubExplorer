export interface CacheContent {
  content: string;
}

export interface GetCacheClientProtocol {
  getItem: (key: string) => CacheContent;
}
