//@flow

export default (store: any) => [
  {
    path: '/auth',
    component: require('./auth.component').AuthComponent,
    indexRoute: {
      component: require('./login/login.container').LoginContainer,
    },
    childRoutes: [
      {
        path: 'login',
        component: require('./login/login.container').LoginContainer,
      },
    ],
  },
];
