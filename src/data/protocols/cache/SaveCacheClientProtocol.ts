export interface SaveCacheProtocol {
  save<T = unknown>(key: string, content: T): void
}
