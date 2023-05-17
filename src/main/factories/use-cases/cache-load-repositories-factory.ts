import { CacheLoadRepositories } from '../../../data/use-cases/CacheLoadRepositories'
import { LoadRepositories } from '../../../domain/use-cases/LoadRepositories'
import { makeLocalStorageGetCacheClientAdapter } from '../cache/local-storage-get-cache-client-adapter-factory'
import { makeRepositoriesCacheKey } from '../cache/repositories-cache-key-factory'

export const makeCacheLoadRepositories = (): LoadRepositories => {
  return new CacheLoadRepositories(
    makeRepositoriesCacheKey(),
    makeLocalStorageGetCacheClientAdapter(),
  )
}
