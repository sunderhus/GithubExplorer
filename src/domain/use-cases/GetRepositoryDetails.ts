import { Repository } from '../models/Repository'

export interface GetRepositoryDetails {
  load(id: string): Promise<Repository>
}
