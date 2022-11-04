import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _780453e6 = () => interopDefault(import('../pages/index copy.vue' /* webpackChunkName: "pages/index copy" */))
const _bfc31042 = () => interopDefault(import('../pages/index copy 2.vue' /* webpackChunkName: "pages/index copy 2" */))
const _bfa6e140 = () => interopDefault(import('../pages/index copy 3.vue' /* webpackChunkName: "pages/index copy 3" */))
const _20c8e038 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/index%20copy",
    component: _780453e6,
    name: "index copy"
  }, {
    path: "/index%20copy%202",
    component: _bfc31042,
    name: "index copy 2"
  }, {
    path: "/index%20copy%203",
    component: _bfa6e140,
    name: "index copy 3"
  }, {
    path: "/",
    component: _20c8e038,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
