import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './views/MainPage';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/training" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}
