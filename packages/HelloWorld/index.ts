import HelloWorld from './HelloWorld.vue'
import type { App, Plugin } from 'vue'

export const HelloWorldPlugin: Plugin = {
  install(app: App) {
    app.component('HelloWorld', HelloWorld)
  },
}

export { HelloWorld }
