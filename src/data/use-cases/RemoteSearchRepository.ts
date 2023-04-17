import { InvalidRepositoryError } from '../../domain/errors/InvalidRepositoryError'
import { UnexpectedError } from '../../domain/errors/UnexpectedError'
import { Repository } from '../../domain/models/Repository'
import { SearchRepository } from '../../domain/use-cases/SearchRepository'
import {
  HttpClientProtocol,
  HttpStatusCode,
} from '../protocols/http/HttpClientProtocol'

interface RemoteRepository {
  name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
}

export class RemoteSearchRepository implements SearchRepository {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClientProtocol,
  ) {}

  async search(searchText: string): Promise<Repository> {
    const httpResponse = await this.httpClient.request({
      method: 'GET',
      url: `${this.url}/${searchText}`,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return this.parse(httpResponse.body as RemoteRepository)
      case HttpStatusCode.notFound:
        throw new InvalidRepositoryError()
      default:
        throw new UnexpectedError()
    }
  }

  private parse(httpResponse: RemoteRepository): Repository {
    return {
      name: httpResponse.name,
      description: httpResponse.description,
      owner: {
        avatar: httpResponse.owner.avatar_url,
        login: httpResponse.owner.login,
      },
    }
  }
}
