// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


// 01.引入初始化样式
import './assets/styles/reset.css'
//02.引入解决移动端1px边框问题样式
import './assets/styles/border.css'
import  './assets/iconfont/iconfont.css'


//03.引入Fastclick解决移动端click事件300ms延迟
import FastClick from 'fastclick'

Vue.config.productionTip = false

FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
