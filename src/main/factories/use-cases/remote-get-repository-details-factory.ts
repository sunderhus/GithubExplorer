import { RemoteGetRepositoryDetails } from '../../../data/use-cases/RemoteGetRepositoryDetails'
import { GetRepositoryDetails } from '../../../domain/use-cases/GetRepositoryDetails'
import { makeApiUrl } from '../http/api-url-factory'
import { makeAxiosHttpClientAdapter } from '../http/axios-http-client-adapter-factory'

export const makeRemoteGetRepositoryDetails = (): GetRepositoryDetails => {
  return new RemoteGetRepositoryDetails(
    makeApiUrl('repos'),
    makeAxiosHttpClientAdapter(),
  )
}
