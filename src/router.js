import Vue from 'vue'
import VueRouter from 'vue-router'

import One from '@/components/One'
import Two from '@/components/Two'
import Three from '@/components/Three'
import User from '@/page/user'
import UserProfile from '@/page/userProfile'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: One },
    { path: '/about', component: Two},
    { path: '/contact', component: Three},
    { path: '/user', component: User},
    { path: '/user/:id', component: UserProfile}
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

export default router