// import { defineStore } from 'pinia'

// export const useScreenStore = defineStore({
//     id: 'screen',
//     state: () => {
//         return {
//             title: '大屏可视化',
//             theme: 'dark'
//         }
//     }
// })


import { defineStore } from 'pinia'

export const useScreenStore = defineStore('screen', {
    state: () => ({
        title: '大屏可视化',
        theme: 'dark'
    })
})