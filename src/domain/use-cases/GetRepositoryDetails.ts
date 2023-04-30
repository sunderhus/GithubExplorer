import { RepositoryDetails } from '../models/RepositoryDetails'

export interface GetRepositoryDetails {
  get(owner: string, repositoryName: string): Promise<RepositoryDetails>
}
