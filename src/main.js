import { createApp } from 'vue'
import App from './App.vue'

// Font Awesome 圖示
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import icons
import { faXmark, faInfoCircle, faChevronRight, faStarOfLife, faCircleUser } from '@fortawesome/free-solid-svg-icons'


library.add(faXmark, faInfoCircle, faChevronRight, faStarOfLife, faCircleUser)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
