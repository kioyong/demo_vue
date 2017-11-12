import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import App from './App'
import VueRouter from 'vue-router'
import routeConfig from './router-config'  

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueResource)
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
    message: 'Hello Vue!'
  },
    //初始化完成会调用created方法
  created(){
    console.log("init created");
    // this.checkLogin();
    this.gotoUserInfo();
  },

  methods:{
    checkLogin(){
      console.log("this is get checkLogin")
      if(!this.$data.unLogin){
        this.$router.push('/login')
      }else{
        this.$router.push('/user_info')
      }
    },
    gotoUserInfo(){
      this.$router.push('/user_info')
    }
  },
})
const store = new Vuex.Store({
  state: {
    domain:'localhost:8080/userinfo', //保存后台请求的地址，修改时方便（比方说从测试服改成正式服域名）
    userInfo: {
      nick: null,
      ulevel: null,
      uid: null,
      portrait: null
    }
  },
  mutations: {
    updateUserInfo(state, newUserInfo) {
      state.userInfo = newUserInfo;
    }
  }
})
