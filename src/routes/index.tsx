import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route path="/repositories/:repository+" component={Repository} ></Route>
    </Switch>
)

export default Routes;
