import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function SiteRoute() {
  return (
      <BrowserRouter>
        <Switch>
            <Route path='/site/home' component={()=>(<h1>Site/home</h1>)}/>
            <Redirect from='/' to='/app' />
        </Switch>
      </BrowserRouter>
  );
}

export default SiteRoute;