import { Repository } from '../../../domain/models/Repository'

export interface SaveCacheProtocol {
  save(key: string, content: Repository[]): void
}
