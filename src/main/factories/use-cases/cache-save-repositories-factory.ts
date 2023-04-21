import { CacheSaveRepositories } from '../../../data/use-cases/CacheSaveRepositories'
import { SaveRepositories } from '../../../domain/use-cases/SaveRepositories'
import { makeLocalStorageSaveCacheAdapter } from '../cache/local-storage-save-cache-client-adapter-factory'

export const makeCacheSaveRepositories = (): SaveRepositories => {
  return new CacheSaveRepositories(
    '@GihubExplorer:repositories',
    makeLocalStorageSaveCacheAdapter(),
  )
}
