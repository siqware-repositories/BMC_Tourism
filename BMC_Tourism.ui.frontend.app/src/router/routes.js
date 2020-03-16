
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
      },
      ,{
        path: '/service',
        component: () => import('../pages/Service')
      },
    ]
  },
  {
    path: '/',
    component: () => import('../layouts/PageDetailLayout'),
    children: [
      {
        path: '/place-detail:id',
        name:'place_detail',
        component: () => import('../pages/PlaceDetail')
      },{
        path: '/place-guide',
        name:'place_guide',
        component: () => import('../pages/PlaceGuide')
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
