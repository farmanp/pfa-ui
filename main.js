import Vue from 'vue';
import VueFormWizard from 'vue-form-wizard';  
import App from "./App";
import "vue-form-wizard/dist/vue-form-wizard.min.css";


Vue.use(VueFormWizard)
Vue.config.productionTip = false;
new Vue({
 el: '#app',
 template: "<App/>",
 components: { App },
 methods: {
  onComplete: function(){
      alert('Yay. Done!');
   }
  }
})