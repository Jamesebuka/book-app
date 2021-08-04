
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Splash.vue') },
      { path: 'main', component: () => import('src/pages/Main.vue') },
      { path: 'search', component: () => import('src/pages/Search.vue') },
      { path: 'preview/:id', component: () => import('src/pages/Preview.vue') },
      { path: 'about', component: () => import('src/pages/About.vue') }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
