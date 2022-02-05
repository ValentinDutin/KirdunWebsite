import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/layouts/index.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { faYoutube } from '@fortawesome/free-brands-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faBars)

createApp(App).component('fa', FontAwesomeIcon).use(router).mount('#app')
