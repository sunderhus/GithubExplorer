import { Repository } from '../../domain/models/Repository'
import { SaveRepositories } from '../../domain/use-cases/SaveRepositories'
import { SaveCacheProtocol } from '../protocols/cache/SaveCacheClientProtocol'

export class CacheSaveRepositories implements SaveRepositories {
  constructor(
    private readonly key: string,
    private readonly cacheClient: SaveCacheProtocol,
  ) {}

  save(repositories: Repository[]): void {
    this.cacheClient.save(this.key, repositories)
  }
}
