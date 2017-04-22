//@flow

export default (store: any) => [
  {
    path: '/dashboard',
    component: require('./dashboard.component').DashboardComponent,
    indexRoute: {
      component: require('./home/home.container').DashboardHomeContainer,
    },
    childRoutes: [
      {
        path: 'home',
        component: require('./home/home.container').DashboardHomeContainer,
      },
    ],
  },
];
