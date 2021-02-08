
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'elements', component: () => import('pages/Elements.vue') },
      { path: '3green', component: () => import('pages/3green.vue') },
      { path: 'hq', component: () => import('pages/Hq.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
