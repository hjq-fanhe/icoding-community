import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Discovery = () => import("view/discovery/Discovery")
const Share = () => import("view/share/Share")
const Article = () => import("view/article/Article")

const LoginPage = () => import("view/login/LoginPage")
const Login = () => import("view/login/childrens/Login")
const Register = () => import("view/login/childrens/Register")

const Account = () => import("view/account/Account")
const Publish = () => import("view/account/childrens/Publish")
const Message = () => import("view/account/childrens/Message")
const Setting = () => import("view/account/childrens/Setting")

const routes = [
  {path: '/', redirect: '/discovery'},
  {
    path: '/discovery',
    component: Discovery,
    name: 'discovery',
    meta: {
      title: "首页-爱编码社区"
    }
  },
  {
    path: '/share',
    component: Share,
    name: 'share',
    meta: {
      title: '分享-爱编码社区'
    }
  },
  {
    path: '/article',
    component: Article,
    name: 'article',
    meta: {
      title: '文章-爱编码社区'
    }
  },
  {
    path: '/loginPage',
    name: 'loginPage',
    component: LoginPage,
    meta: {title: "登录-爱编码社区"},
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login ,
        meta: {title: "登录-爱编码社区"}
      },
      {
        path: 'register',
        component: Register,
        meta: {title: "注册-爱编码社区"},
      }
    ]
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
    children: [
      {
        path: 'message',
        name: 'message',
        component: Message,
        meta: {title: "用户消息-爱编码社区"},
      }, {
        path: 'publish',
        name: 'publish',
        component: Publish,
        meta: {title: "发起问题-爱编码社区"},
      },{
        path: 'setting',
        name: 'setting',
        component: Setting,
        meta: {title: "用户设置-爱编码社区"},
      },

    ]

  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})

//解决连续点击同一个路由报错
const originalPush = router.push
router.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
