// import { createApp } from 'vue'
// import App from './App.vue'
// import router from '@/router'
// import * as store from '@/store'
// import * as chart from './components/chart'
// import '@/assets/css/index.css'
// import 'element-plus/dist/index.css'

// createApp(App).use(chart).use(store).use(router).mount('#app')



// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'  // 确保路径正确
// import * as store from './store'
// import * as chart from './components/chart'
// import './assets/css/index.css'
// import 'element-plus/dist/index.css'

// createApp(App)
//     .use(router)
//     .use(store)
//     .use(chart)
//     .mount('#app')




import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { install as storeInstall } from './store'  // 明确导入 install 函数
import { install as chartInstall } from './components/chart'
import './assets/css/index.css'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 按正确顺序安装插件
app.use(storeInstall)  // 先安装 Pinia
app.use(router)
app.use(chartInstall)

app.mount('#app')