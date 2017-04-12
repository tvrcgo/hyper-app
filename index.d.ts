import * as React from 'react'

export class Application {

  constructor(config?: {})

  use(plugin: (ctx: {}, app: {}) => void): void

}

export default class HyperApp extends Application {

  constructor(config?: {})

  mixin(store: ((props: any) => {}) | {}, CSSModule?: {}): void

  render(Component: React.StatelessComponent<any>): React.ReactElement<any>

  router(routes: {}[]): void

  run(selector: string): void
}
