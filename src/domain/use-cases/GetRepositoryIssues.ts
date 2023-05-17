import { RepositoryIssue } from '../models/RepositoryIssue'

export interface GetRepositoryIssues {
  get(owner: string, repositoryName: string): Promise<RepositoryIssue[]>
}
