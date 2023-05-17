import { LocalStorageSaveCacheClienteAdapter } from '../../../infra/cache/LocalStorageSaveCacheClienteAdapter'

export const makeLocalStorageSaveCacheAdapter =
  (): LocalStorageSaveCacheClienteAdapter => {
    return new LocalStorageSaveCacheClienteAdapter()
  }
