import React = require('react')

export class Application {

  constructor(config?: {})

  use(plugin: (ctx: {}, app: {}) => void): void

}

export default class Yoda extends Application {

  constructor(config?: {})

  mixin(store: ((props: any) => {} | {}), CSSModule?: {}): void

  render(Component: React.StatelessComponent<props?: {}, YodaContext?: {}, context?: {}>): React.ReactElement<any>

  router(routes: {}[]): void

  run(selector: string): void
}
