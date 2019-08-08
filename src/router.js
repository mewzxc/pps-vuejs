import Vue from 'vue'
import VueRouter from 'vue-router'

// import One from '@/components/One'
// import Two from '@/components/Two'
// import Three from '@/components/Three'
// import User from '@/page/user'
// import UserProfile from '@/page/userProfile'
// import PersonForm from '@/page/PersonForm'
const One = () => import('@/components/One' /* webpackChunkName: 'One' */)
const Two = () => import('@/components/Two' /* webpackChunkName: 'Two' */)
const Three = () => import('@/components/Three' /* webpackChunkName: 'Three' */)
const User = () => import('@/page/user' /* webpackChunkName: 'User' */)
const UserProfile = () => import('@/page/userProfile' /* webpackChunkName: 'userProfile' */)
const PersonForm = () => import('@/page/PersonForm' /* webpackChunkName: 'PersonForm' */)

Vue.use(VueRouter)

const routes = [
    { path: '/', component: One },
    { path: '/about', component: Two},
    { path: '/contact', component: Three},
    { path: '/user', component: User},
    { path: '/user/:id', component: UserProfile},
    { path: '/form', component: PersonForm}
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

export default router