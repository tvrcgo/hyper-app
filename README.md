# arcjs

Easy to build front-end app.

### Install

```shell
npm install --save arcjs
```

### Example

```js
import Arc from 'arcjs'

const app = new Arc()

app.use((ctx, app) => {
  // ...
})

app.render(({ children }) => {
  return (
    <div>Hi, this is an app.</div>
  )
})
```