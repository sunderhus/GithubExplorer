import { HttpStatusCode } from 'axios'
import { RepositoryDetails } from '../../domain/models/RepositoryDetails'
import { GetRepositoryDetails } from '../../domain/use-cases/GetRepositoryDetails'
import { HttpClientProtocol } from '../protocols/http/HttpClientProtocol'
import { UnexpectedError } from '../../domain/errors/UnexpectedError'
import { InvalidRepositoryError } from '../../domain/errors/InvalidRepositoryError'

interface RemoteRepositoryDetails {
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
  stargazers_count: number
  forks_count: number
  open_issues_count: number
}

export class RemoteGetRepositoryDetails implements GetRepositoryDetails {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClientProtocol,
  ) {}

  async get(owner: string, repositoryName: string): Promise<RepositoryDetails> {
    const httpResponse = await this.httpClient.request({
      method: 'GET',
      url: `${this.url}/${owner}/${repositoryName}`,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.Ok:
        return this.parse(httpResponse.body as RemoteRepositoryDetails)
      case HttpStatusCode.NotFound:
        throw new InvalidRepositoryError()
      default:
        throw new UnexpectedError()
    }
  }

  private parse(httpResponse: RemoteRepositoryDetails): RepositoryDetails {
    return {
      name: httpResponse.full_name,
      description: httpResponse.description,
      forks: httpResponse.forks_count,
      issues: httpResponse.open_issues_count,
      stars: httpResponse.stargazers_count,
      owner: {
        avatar: httpResponse.owner.avatar_url,
        login: httpResponse.owner.login,
      },
    }
  }
}
