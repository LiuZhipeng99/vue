import  App from './App.vue'
import Vue from 'vue';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });
import 'element-ui/lib/theme-chalk/index.css'

import '../static/css/bootstrap.min.css'
import VueRouterN from 'vue-router'
Vue.use(VueRouterN);
// import Charts from '@jiaminghi/charts'

// const container = document.getElementById('show')

// const myChart = new Charts(container)
// /**
//  * @description 设置图表配置
//  * @param {Object} option 图表配置
//  * @param {Boolean} animationEnd 执行animationEnd
//  * @return {Undefined} 无返回值
//  */
//  Charts.prototype.setOption = function (option, animationEnd = false) {
//   //...
//   animationEnd = false;
// }
import VCharts from 'v-charts'
Vue.use(VCharts)


// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)
//设置路由
import start from './components/Home.vue'
import train from './components/Train.vue'
import show from './components/Show.vue'
let router = new VueRouterN({
  routes:[
    {
      path: '/',
      component: start
    },
    {
      path: '/train',
      component: train
    },
    {
      path: '/show',
      component: show
    }
  ]
})


new Vue({
  render: h => h(App),
  router //注入router很关键
}).$mount('#app')
