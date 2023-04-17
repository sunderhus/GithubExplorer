import { Repository } from '../models/Repository'

export interface SearchRepository {
  search: (searchText: string) => Promise<Repository>
}
