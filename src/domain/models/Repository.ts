import { RepositoryOwner } from './RepositoryOwner'

export interface Repository {
  name: string
  description: string
  owner: RepositoryOwner
}
