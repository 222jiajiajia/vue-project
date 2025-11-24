// import { createPinia } from 'pinia'

// export * from './screen'

// export const install = (app) => {
//     app.use(createPinia())
// }

import { createPinia } from 'pinia'

export * from './screen.js'

export const install = (app) => {
  app.use(createPinia())
}