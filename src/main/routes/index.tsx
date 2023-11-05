import React from 'react'
import {
  BrowserRouter,
  Routes as ReactRouterRoutes,
  Route,
} from 'react-router-dom'

import { makeHome } from '../factories/views/home-factory'
import { makeRepositoryDetails } from '../factories/views/repository-details-factory'

const Routes: React.FC = () => (
  <BrowserRouter>
    <ReactRouterRoutes>
      <Route path="/" Component={makeHome} />
      <Route
        path="/repositories/:owner/:repositoryName"
        Component={makeRepositoryDetails}
      />
    </ReactRouterRoutes>
  </BrowserRouter>
)

export default Routes
