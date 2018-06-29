import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: resolve => require(['@/views/index.vue'], resolve),
      meta: {
        title: ''
      },
      children:[
        {
        	path: '/',
            name: 'index',
            meta: {
               title: '首页'
            },
            component: resolve => require(['@/views/welcome.vue'], resolve)
        },
        {
        	path: '/custom',
            name: 'custom',
            meta: {
               title: '定制管理'
            },
            component: resolve => require(['@/views/custom/custom.vue'], resolve)
        },
        {
        	path: '/product-classification',
            name: 'product-classification',
            meta: {
               title: '产品分类管理'
            },
            component: resolve => require(['@/views/product-classification/product-classification.vue'], resolve)
        },
        {
        	path: '/product-list',
            name: 'product-list',
            meta: {
               title: '产品列表'
            },
            component: resolve => require(['@/views/product-list/product-list.vue'], resolve)
        },
        {
        	path: '/order',
            name: 'order',
            meta: {
               title: '订单管理'
            },
            component: resolve => require(['@/views/order/order.vue'], resolve)
        },
        {
        	path: '/organization',
            name: 'organization',
            meta: {
               title: '组织管理'
            },
            component: resolve => require(['@/views/organization/organization.vue'], resolve)
        },
        {
        	path: '/customer',
            name: 'customer',
            meta: {
               title: '客户管理'
            },
            component: resolve => require(['@/views/customer/customer.vue'], resolve)
        },
        {
        	path: '/advertising',
            name: 'advertising',
            meta: {
               title: '广告管理'
            },
            component: resolve => require(['@/views/advertising/advertising.vue'], resolve)
        },
        {
        	path: '/account',
            name: 'account',
            meta: {
               title: '账号管理'
            },
            component: resolve => require(['@/views/account/account.vue'], resolve)
        }
      ]
    }
  ]
})
