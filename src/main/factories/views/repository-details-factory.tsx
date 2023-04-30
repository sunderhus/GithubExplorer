import React from 'react'
import RepositoryDetailsPage from '../../../presentation/pages/RepositoryDetails'
import { makeRemoteGetRepositoryDetails } from '../use-cases/remote-get-repository-details-factory'

export const makeRepositoryDetails: React.FC = () => {
  return (
    <RepositoryDetailsPage
      getRepositoryDetails={makeRemoteGetRepositoryDetails()}
    />
  )
}
