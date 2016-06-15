const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use(cookieParser())

const __DEV__ = process.env.NODE_ENV !== 'production'

app.get('*', (req, res) => {
  const dir = req.cookies.dir === 'rtl' ? 'rtl' : 'ltr'

  // the two lines below are only used for production
  // depending on the value of the `dir` cookie, we use
  // app.css or app.rtl.css
  const cssUrl = `/dist/app${dir === 'rtl' ? '.rtl' : ''}.css`
  const css = __DEV__ ? '' : `<link rel="stylesheet" href="${cssUrl}">`

  const html = `
<!DOCTYPE html>
<html dir=${dir}>
<head>
  <title></title>
  ${css}
</head>
<body>
  <div id="root"></div>
  <script src="/dist/app.js"></script>
</body>
</html>
`
  res.send(html)
})

app.listen(3000, () => {
  console.log(`Listening on http://localhost:3000`)
})
