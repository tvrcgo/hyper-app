# Hyper App

Easy to build front-end app.

## Install

```shell
npm install --save hyper-app
```

## Usage

Application

- `use()` mount plugin.

Hyper App

- `mixin()` mixin store and css module.
- `render()` render component with mixin assets.
- `router()` set react routes.
- `run()` react-dom rendering.

### Basic

```js
import App from 'hyper-app'
import Store from './index.st'
import styles from './index.css'

const app = new App()

app.mixin(Store, styles)

app.render(({ children }, { store }) => {
  return (
    <div>Hi, this is an app.</div>
  )
})
```

### Plugin

```js
app.use((ctx, app) => {
  // ctx will be passed to component
  ctx.hi = 'hello guys'
})

app.use((ctx, app) => {
  // add app singleton
  app.hi = (text) => {
    ctx.halo = text
  }
})

app.hi('halo')

// component(props, ctx)
app.render(({ children }, { hi, halo }) => {
  return (
    <div>{hi}, {halo}</div>
  )
})
```