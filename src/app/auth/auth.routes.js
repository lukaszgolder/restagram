//@flow

export default (store: any) => [
  {
    path: '/auth',
    component: require('./auth.component').AuthComponent,
    indexRoute: {
      component: require('./login/login.component').LoginFormComponent,
    },
    childRoutes: [
      {
        path: 'login',
        component: require('./login/login.component').LoginFormComponent,
      },
    ],
  },
];
