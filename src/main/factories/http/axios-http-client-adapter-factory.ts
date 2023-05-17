import { AxiosHttpClientAdapter } from '../../../infra/http/AxiosHttpClientAdapter'

export const makeAxiosHttpClientAdapter = (): AxiosHttpClientAdapter => {
  return new AxiosHttpClientAdapter()
}
