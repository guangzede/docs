// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './router'
import hljs from 'highlight.js'
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
