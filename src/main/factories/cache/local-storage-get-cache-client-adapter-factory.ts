import { LocalStorageGetCacheClienteAdapter } from '../../../infra/cache/LocalStorageGetCacheClienteAdapter'

export const makeLocalStorageGetCacheClientAdapter = (): LocalStorageGetCacheClienteAdapter => {
  return new LocalStorageGetCacheClienteAdapter()
}
