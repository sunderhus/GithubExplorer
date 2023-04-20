import { LocalStorageCacheClienteAdapter } from '../../../infra/cache/LocalStorageCacheClientAdapter'

export const makeLocalStorageCacheClientAdapter = (): LocalStorageCacheClienteAdapter => {
  return new LocalStorageCacheClienteAdapter()
}
