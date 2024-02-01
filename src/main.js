import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.js';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';



// import styles bundle
import 'swiper/css/bundle';
createApp(App).use(router).mount('#app')
