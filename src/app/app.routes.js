import React from 'react';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

export const getRoutes = store => ({
  childRoutes: [
    {
      path: '/',
      component: require('./app.component').AppComponent,
      childRoutes: [...require('./auth/auth.routes').default(store)],
    },
  ],
});

export const appRoutes = store => (
  <Router history={syncHistoryWithStore(browserHistory, store)} routes={getRoutes(store)} />
);
