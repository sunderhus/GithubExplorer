import { Repository } from '../models/Repository'

export interface LoadRepositories {
  load(): Repository[]
}
