import { Repository } from '../../domain/models/Repository'
import { LoadRepositories } from '../../domain/use-cases/LoadRepositories'
import { GetCacheClientProtocol } from '../protocols/cache/GetCacheClientProtocol'

export class CacheLoadRepositories implements LoadRepositories {
  constructor(
    private readonly cacheKey: string,
    private readonly cacheClient: GetCacheClientProtocol,
  ) {}

  load(): Repository[] {
    const cacheResult = this.cacheClient.getItem(this.cacheKey)

    return this.parse(cacheResult.content)
  }

  private parse(cacheContent: string): Repository[] {
    return JSON.parse(cacheContent) as Repository[]
  }
}
