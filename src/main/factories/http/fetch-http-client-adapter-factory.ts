import { FetchHttpClientAdapter } from '../../../infra/http/FetchHttpClientAdapter'

export const makeFetchHttpClientAdapter = (): FetchHttpClientAdapter => {
  return new FetchHttpClientAdapter()
}
