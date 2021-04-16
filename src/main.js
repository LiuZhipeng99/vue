import  App from './App.vue'
import Vue from 'vue';
import Element from 'element-ui';
import VueRouterN from 'vue-router'




import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/bootstrap.min.css'

Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(VueRouterN);


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
      component: show,
    }

  ]
})


new Vue({
  render: h => h(App),
  router //注入router很关键
}).$mount('#app')
