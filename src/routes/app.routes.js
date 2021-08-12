import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';


function AppRoutes() {
  return (
      <BrowserRouter>
        <Switch>
            <Route path='/app/dashboard' component={()=>(<h1>app/dashboard</h1>)}/>
            <Redirect from='/app' to='/app/dashboard' />
        </Switch>
      </BrowserRouter>
  );
}

export default AppRoutes;