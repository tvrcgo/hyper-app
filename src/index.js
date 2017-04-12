import appRouter from './plugin/router'
import appRender from './plugin/render'

class Application {

  constructor(config = {}) {
    Object.defineProperties(this, {
      $app: {
        value: {
          config
        },
        enumerable: false,
        writable: true
      }
    })
  }

  use(plugin) {
    if (plugin && typeof plugin === 'function') {
      plugin.call(this, this.$app, this)
    }
    return this
  }

}

// Avoid application prototype members being modified by plugin.
(Object.freeze || Object)(Application.prototype)

// HyperApp
class HyperApp extends Application {
  constructor(props) {
    super(props)
    // use render, router in default.
    this.use(appRender)
    this.use(appRouter)
  }
}

export {
  HyperApp as default,
  Application
}