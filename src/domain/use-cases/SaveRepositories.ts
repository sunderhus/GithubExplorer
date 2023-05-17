import { Repository } from '../models/Repository'

export interface SaveRepositories {
  save: (repositories: Repository[]) => void
}
