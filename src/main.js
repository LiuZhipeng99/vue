import  App from './App.vue'
import Vue from 'vue';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });
import 'element-ui/lib/theme-chalk/index.css'

import VueRouterN from 'vue-router'
Vue.use(VueRouterN);

//设置路由
import start from './components/Home.vue'
import train from './components/Train.vue'
let router = new VueRouterN({
  routes:[
    {
      path: '/',
      component: start
    },
    {
      path: '/train',
      component: train
    }
  ]
})

// new Vue({
//   // el:'#app',
//   render: h => h(App),
//   components:{
//     App
//   },
//   template: '<App/>',// 指定需要渲染到页面的模板
//   router
// })
new Vue({
  render: h => h(App),
  router //注入router很关键
}).$mount('#app')
