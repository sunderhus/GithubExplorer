import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Repository from '../../presentation/pages/RepositoryDetails'
import { makeHome } from '../factories/views/home-factory'

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={makeHome} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
)

export default Routes
