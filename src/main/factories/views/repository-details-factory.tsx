import React from 'react'
import RepositoryDetailsPage from '../../../presentation/pages/RepositoryDetails'
import { makeRemoteGetRepositoryDetails } from '../use-cases/remote-get-repository-details-factory'
import { makeRemoteGetRepositoryIssues } from '../use-cases/remote-get-repository-issues-factory'

export const makeRepositoryDetails: React.FC = () => {
  return (
    <RepositoryDetailsPage
      getRepositoryDetails={makeRemoteGetRepositoryDetails()}
      getRepositoryIssues={makeRemoteGetRepositoryIssues()}
    />
  )
}
