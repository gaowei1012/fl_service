const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors')
const app = new Koa()
let router = new Router()

let user = require('./router/user')
let home = require('./router/home')

router.use('/user', user.routes())
router.use('/home', home.routes())

// 链接数据库
// ;(async () => {
//   await connect()
//   initSchema()
//   const user = mongoose.model('User')
//   let onceUser = new user({username: '执念12', password: '123'})

//   onceUser.save().then(() => {
//     console.log('注册成功')
//   })

// })()
app.use(cors())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3001, () => {
  console.log('prot service started 3001')
})
