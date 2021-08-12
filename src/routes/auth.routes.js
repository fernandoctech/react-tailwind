import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function AuthRoutes() {
  return (
      <BrowserRouter>
      <Switch>
          <Route path='/auth/login' component={()=>(<h1>Login</h1>)}/>
          <Route path='/auth/register' component={()=>(<h1>Cadastro</h1>)}/>
          <Redirect from='/auth' to='/auth/login' />
      </Switch>
      </BrowserRouter>
  );
}

export default AuthRoutes;