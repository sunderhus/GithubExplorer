import { CacheLoadRepositories } from '../../../data/use-cases/CacheLoadRepositories'
import { LoadRepositories } from '../../../domain/use-cases/LoadRepositories'
import { makeLocalStorageCacheClientAdapter } from '../cache/local-storage-cache-client-adapter-factory'

export const makeCacheLoadRepositories = (): LoadRepositories => {
  return new CacheLoadRepositories(
    '@GihubExplorer:repositories',
    makeLocalStorageCacheClientAdapter(),
  )
}
