import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import { join } from 'path'

// plugin: router
function appRouter(ctx, app) {
  const root = process.cwd()
  // set routes
  app.router = (routes) => {
    const loop = (route) => {
      const { entry } = ctx.config
      const viewRoot = join(root, 'front/view')
      const routeView = entry ? `${entry}/${route.view}` : route.view
      const view = require(`${viewRoot}/${routeView}/index`)
      return {
        path: route.path,
        component: route.component || view.default,
        childRoutes: route.children && route.children.map(route => loop(route))
      }
    }
    const $routes = (routes || ctx.config.routes || []).map(route => loop(route))
    ctx.$router = (
      <Router history={hashHistory} routes={$routes} />
    )
  }

  // run
  app.run = (selector) => {
    if (!ctx.$router) {
      this.router()
    }
    render(ctx.$router, document.querySelector(selector))
  }
}

export default appRouter