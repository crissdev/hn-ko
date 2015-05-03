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
  },
  '/submitted/?id={userId}/': {
    component: 'app/pages/submissions',
    rules: {
      userId: /[a-z0-9_-]+/
    },
    meta: {
      docTitle: (route) => `${route.params.userId}'s submissions`
    }
  },
  '/threads/?id={userId}/': {
    component: 'app/pages/threads',
    rules: {
      userId: /[a-z0-9_-]+/
    },
    meta: {
      docTitle: (route) => `${route.params.userId}'s comments`
    }
  }
}
