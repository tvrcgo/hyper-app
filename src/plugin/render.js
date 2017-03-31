import { connect } from 'mobx-react-connect'

// plugin: render
function appRender(ctx, app) {
  // mixin store and styles
  app.mixin = (store = () => {}, cssModule = {}) => {
    Object.defineProperties(ctx, {
      store: {
        value: store,
        enumerable: true
      },
      __STYLES__: {
        value: cssModule,
        enumerable: false,
        writable: false
      }
    })
    return this
  }
  // connect component, store, css modules
  app.render = (statelessComponent) => {
    return connect(statelessComponent, ctx, ctx.__STYLES__)
  }
}

export default appRender
