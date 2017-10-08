import Login from './components/Login.vue'
import UserInfo from './components/UserInfo.vue'
// 引入子页面
// import step1 from './page/activePublic/step1.vue'

export default [
  {
    path:'/login',component:Login
  },
  {
    path:'/user_info',component:UserInfo
  }
]