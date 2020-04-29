import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/DashBoard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={Dashboard} ></Route>
        <Route path="/repositories/:repository+" component={Repository} ></Route>
    </Switch>
)

export default Routes;
