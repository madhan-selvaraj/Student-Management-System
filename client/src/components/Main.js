import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Add, Edit } from './../pages';

import './Main.css';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/new" component={Add} />
        <Route path="/edit" component={Edit} />
      </Switch>
    </main>
  )
}

export default Main;