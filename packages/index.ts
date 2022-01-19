import { HelloWorldPlugin } from './HelloWorld'
import type { App, Plugin } from 'vue'

const componentLibPlugin: Plugin = {
  install(app: App) {
    HelloWorldPlugin.install?.(app)
  },
}

export default componentLibPlugin

export * from './HelloWorld'
