// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.component('Async', function (resolve) {
  console.log('Loading...')
  setTimeout(() => {
    console.log('Loaded')
    require(['./Async'], resolve)
  }, 2000)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
