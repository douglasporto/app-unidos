export default [
  {
    path: '/',
    component: () => import('layouts/intro'),
    children: [
      { path: '/', component: () => import('pages/index') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      // { path: '/', component: () => import('pages/index') }
      { path: '/games', component: () => import('pages/games') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
