import { SaveCacheProtocol } from '../../data/protocols/cache/SaveCacheClientProtocol'

export class LocalStorageSaveCacheClienteAdapter implements SaveCacheProtocol {
  save(key: string, content: unknown): void {
    localStorage.setItem(key, this.adapt(content))
  }

  private adapt(content: unknown): string {
    return JSON.stringify(content)
  }
}
