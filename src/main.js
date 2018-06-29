import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import store from './vuex/store'



//开启debug模式
Vue.config.debug = true;
Vue.use(Vuex)
Vue.use(Element)
Vue.use(VueRouter);
Vue.use(VueResource);

// 定义组件, 也可以像教程之前教的方法从别的文件引入
// const First = { template: '<div><h2>route1x</h2></div>' }
import firstcomponent from './component/firstcomponent.vue'
import secondcomponent from './component/secondcomponent.vue'

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first1',
      component: firstcomponent
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
})
// const app = new Vue({
//   router: router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

new Vue({
  router: router,
  store,
  el: '#app',
  render: h => h(App)
})
