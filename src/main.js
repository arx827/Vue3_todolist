import {
  createApp
} from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const vm = createApp(App)
vm.use(router)
vm.use(store)
vm.mount('#app')