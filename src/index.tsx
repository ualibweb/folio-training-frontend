import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './views/MainPage';

export default function App() {
  return (
    <Switch>
      <Route path="/training" component={MainPage} />
    </Switch>
  );
}
