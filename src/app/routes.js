export default {
  '/': {
    component: 'app/pages/home'
  },
  '/user/?id={userId}/': {
    component: 'app/pages/user',
    rules: {
      userId: /[a-z0-9_-]+/
    },
    meta: {
      docTitle: (route) => `Profile: ${route.params.userId}`
    }
  }
}
