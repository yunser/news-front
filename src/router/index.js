import Vue from 'vue'
import Router from 'vue-router'

const SimpleWeapp = resolve => require(['@/views/SimpleWeapp'], resolve)
const Simple = resolve => require(['@/views/Simple'], resolve)
const ArticleDetail = resolve => require(['@/views/ArticleDetail'], resolve)
const TopList = resolve => require(['@/views/TopList'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        redirect: '/topList',
        // component: Home
    },
    {
        path: '/simple/weapp',
        component: SimpleWeapp
    },
    {
        path: '/topList',
        component: TopList
    },
    {
        path: '/simple',
        component: Simple
    },
    {
        path: '/articles/:id',
        component: ArticleDetail
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
