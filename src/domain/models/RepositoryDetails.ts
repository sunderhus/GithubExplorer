import { RepositoryOwner } from './RepositoryOwner'

export interface RepositoryDetails {
  name: string
  description: string
  stars: number
  forks: number
  issues: number
  owner: RepositoryOwner
}
