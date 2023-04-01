import Vue from 'vue'
import VueRouter from 'vue-router'

const MainLayout = () => import(/* webpackChunkName: "MainLayout" */ '@/views/layouts/MainLayout.vue')
const ProfilePage = () => import(/* webpackChunkName: "ProfilePage" */ '@/views/pages/ProfilePage.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'ProfilePage',
        component: ProfilePage
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
