import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import App from './App'
import VueRouter from 'vue-router'
import routeConfig from './router-config'  // 引入router-config.js文件
// import router from './router'

//加载路由中间件
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueResource)
// //定义路由
const router = new VueRouter({
      routes: routeConfig
})

new Vue({
  router,
  el: "#app",
  render: h => h(App),
  store,
  data:{
    login:true,
    unLogin:false,
  },
  //方法检查是否登录，如果没有登录跳转到登陆页面
    //初始化完成会调用created方法
  created(){
    console.log("init created");
    this.checkLogin();
  },

  //TODO监听路由器，暂时的效果是任何路由器变动都会触发checkLogin方法
  // watch:{
  //   "$route" : 'checkLogin'
  // },
  methods:{
    checkLogin(){
      console.log("this is get checkLogin")
      if(!this.$data.unLogin){//!this.getCookie('session'){
        this.$router.push('/login')
      }else{
        this.$router.push('/user_info')
      }
    }
  },
})
const store = new Vuex.Store({
  state: {
    domain:'localhost:8080/userinfo', //保存后台请求的地址，修改时方便（比方说从测试服改成正式服域名）
    userInfo: { //保存用户信息
      nick: null,
      ulevel: null,
      uid: null,
      portrait: null
    }
  },
  mutations: {
    //更新用户信息
    updateUserInfo(state, newUserInfo) {
      state.userInfo = newUserInfo;
    }
  }
})
