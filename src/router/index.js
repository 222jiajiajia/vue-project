// import { createRouter, createWebHashHistory } from 'vue-router'
// import Screen from '@/views/screen/index.vue'

// const routes = [
//     {
//         path: '/',
//         redirect: '/screen'
//     },
//     {
//         path: '/screen',
//         component: Screen
//     }
// ]

// const router = createRouter({
//     history: createWebHashHistory(),
//     routes
// })

// export default router


import { createRouter, createWebHashHistory } from 'vue-router'
import Screen from '@/views/screen/index.vue'

const routes = [
    {
        path: '/',
        redirect: '/screen'
    },
    {
        path: '/screen',
        component: Screen
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router  // 使用 ES 模块导出