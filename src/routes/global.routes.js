import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import SiteRoute from './site.routes';

// import { Container } from './styles';

function GlobalRoutes(props) {
  return (
      <BrowserRouter>
        <Switch>
            <Route path='/app' component={AppRoutes}/>
            <Route path='/auth' component={AuthRoutes}/>
            <Route path='/' component={SiteRoute}/>
            <Redirect from='*' to='/' />
        </Switch>
      </BrowserRouter>
  );
}

export default GlobalRoutes;