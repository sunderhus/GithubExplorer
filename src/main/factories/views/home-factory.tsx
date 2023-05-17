import React from 'react'
import Home from '../../../presentation/pages/Home'
import { makeRemoteSearchRepository } from '../use-cases/remote-search-repository-factory'
import { RequiredFieldValidator } from '../../../validation/RequiredFieldValidator'
import { makeCacheLoadRepositories } from '../use-cases/cache-load-repositories-factory'
import { makeCacheSaveRepositories } from '../use-cases/cache-save-repositories-factory'

export const makeHome: React.FC = () => {
  return (
    <Home
      searchRepository={makeRemoteSearchRepository()}
      validation={new RequiredFieldValidator()}
      loadRepositories={makeCacheLoadRepositories()}
      saveRepositories={makeCacheSaveRepositories()}
    />
  )
}
