import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Perfil from './pages/Perfil';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/perfil" component={Perfil} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;