import Vue from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify';
import router from './route'
import aws_exports from './aws-exports';
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';
import '@aws-amplify/ui-vue';

Amplify.configure(aws_exports);
applyPolyfills().then(() => {
  defineCustomElements(window);
});
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
