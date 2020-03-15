
const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../pages/Index.vue'),
      }
    ]
  },
  {
    path: '/',
    component: () => import('../layouts/PageLayout'),
    children: [
      {
        path: '/place',
        component: () => import('../pages/Place')
      },{
        path: '/restaurant',
        component: () => import('../pages/Restaurant')
      },{
        path: '/hotel',
        component: () => import('../pages/Hotel')
      },,{
        path: '/service',
        component: () => import('../pages/Service')
      },
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
