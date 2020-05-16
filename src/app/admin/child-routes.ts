export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  },
  {
    path: 'metrics',
    loadChildren: () =>
      import('./charts/charts.module').then(m => m.ChartsModule),
    data: { icon: 'bar_chart', text: 'Metrics' }
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./tables/tables.module').then(m => m.TablesModule),
    data: { icon: 'table_chart', text: 'Projects' }
  },
  {
    path: 'userProfile',
    loadChildren: () =>
      import('./userprofile/userprofile.module').then(m => m.UserprofileModule),
    data: { icon: 'person', text: 'User profile' }
  }
];
