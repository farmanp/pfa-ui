// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFormWizard from 'vue-form-wizard'
import "vue-form-wizard/dist/vue-form-wizard.min.css";

Vue.config.productionTip = false

Vue.use(VueFormWizard)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  methods: {
    onComplete: function() {
        alert('Yay. Done!');
     }
    }
})