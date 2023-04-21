import { CacheLoadRepositories } from '../../../data/use-cases/CacheLoadRepositories'
import { LoadRepositories } from '../../../domain/use-cases/LoadRepositories'
import { makeLocalStorageGetCacheClientAdapter } from '../cache/local-storage-get-cache-client-adapter-factory'

export const makeCacheLoadRepositories = (): LoadRepositories => {
  return new CacheLoadRepositories(
    '@GihubExplorer:repositories',
    makeLocalStorageGetCacheClientAdapter(),
  )
}
