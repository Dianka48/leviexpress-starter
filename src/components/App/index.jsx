import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { Switch, Route } from 'react-router-dom';

import Reservation from '../Reservation/Reservation';

export const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/reservation/:id" exact>
        <Reservation />
      </Route>
    </Switch>
    <Footer />
  </>
);
