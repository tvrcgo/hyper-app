import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import { join } from 'path'

// plugin: router
function appRouter(ctx, app) {
  // set routes
  app.router = (routes) => {
    const loop = (route) => {
      return {
        path: route.path,
        component: route.component || route.view.default || route.view,
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
