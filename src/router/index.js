import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '@/i18n'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    redirect: '/en/index'
  }, {
    path: '/:lang',
    component: () => import('@/components/lang/lang'),
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/home')
      }
    ]
  }]
})

router.beforeEach((to, from, next) => {
  const langs = Object.keys(i18n.messages)
  const currentLang = to.params.lang
  i18n.locale = langs.indexOf(currentLang) === -1 ? 'en' : currentLang
  next()
})

export default router
