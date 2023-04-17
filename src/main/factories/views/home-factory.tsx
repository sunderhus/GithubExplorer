import React from 'react'
import Home from '../../../presentation/pages/Home'
import { makeRemoteSearchRepository } from '../use-cases/remote-search-repository-factory'
import { RequiredFieldValidator } from '../../../validation/RequiredFieldValidator'

export const makeHome: React.FC = () => {
  return (
    <Home
      searchRepository={makeRemoteSearchRepository()}
      validation={new RequiredFieldValidator()}
    />
  )
}
