import React from 'react'
import {
  BrowserRouter,
  Routes as ReactRouterRoutes, // instead of "Switch"
  Route,
} from 'react-router-dom'

import Repository from '../../presentation/pages/RepositoryDetails'
import { makeHome } from '../factories/views/home-factory'

const Routes: React.FC = () => (
  <BrowserRouter>
    <ReactRouterRoutes>
      <Route path="/" Component={makeHome} />
      <Route
        path="/repositories/:owner/:repositoryName"
        Component={Repository}
      />
    </ReactRouterRoutes>
  </BrowserRouter>
)

export default Routes
