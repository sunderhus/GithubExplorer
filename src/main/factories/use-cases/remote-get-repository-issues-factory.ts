import { RemoteGetRepositoryIssues } from '../../../data/use-cases/RemoteGetRepositoryIssues'
import { GetRepositoryIssues } from '../../../domain/use-cases/GetRepositoryIssues'
import { makeApiUrl } from '../http/api-url-factory'
import { makeAxiosHttpClientAdapter } from '../http/axios-http-client-adapter-factory'

export const makeRemoteGetRepositoryIssues = (): GetRepositoryIssues => {
  return new RemoteGetRepositoryIssues(
    makeApiUrl('repos'),
    makeAxiosHttpClientAdapter(),
  )
}
