import { SaveCacheProtocol } from '../../data/protocols/cache/SaveCacheClientProtocol'
import { Repository } from '../../domain/models/Repository'

export class LocalStorageSaveCacheClienteAdapter implements SaveCacheProtocol {
  save(key: string, content: Repository[]): void {
    localStorage.setItem(key, this.adapt(content))
  }

  private adapt(content: Repository[]): string {
    return JSON.stringify(content)
  }
}
