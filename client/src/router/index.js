import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: 'home' */ '../views/Home'),
        children: [
            {
                path: ':id',
                name: 'home-id',
                component: () => import(/* webpackChunkName: 'home-id' */ '../views/Bookmark')
            }
        ]
    },
    // {
    //     path: '/home/:id',
    //     name: 'home-id',
    //     component: () => import(/* webpackChunkName: 'home-id' */ '../views/Bookmark')
    // },
    {
        path: '/add-bookmark',
        name: 'add-bookmark',
        component: () => import(/* webpackChunkName: 'add-bookmark' */ '../views/AddBookmark')
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import(/* webpackChunkName: 'contacts' */ '../views/Contacts')
    },
    {
        path: '*',
        redirect: '/home'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
