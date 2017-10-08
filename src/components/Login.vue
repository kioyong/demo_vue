<template>
  <div class="login" id="login">
    <div class="log-email">
        <input type="text" placeholder="Email" 
          :class="'log-input' + (account==''?' log-input-empty':'')" 
          v-model="account">
        <input type="password" placeholder="Password" 
          :class="'log-input' + (password==''?' log-input-empty':'')" 
          v-model="password">
        <a href="javascript:;" class="log-btn" @click="login">Login</a>
    </div>
</div>
</template>
<script>
// import Loading from './Loading.vue'
import md5 from 'js-md5'
export default{
    name: 'Login',
    data(){
      return {
        isLogin:false,
        account:'',
        password:''
      }
    },
    // components:{
    //   Loading
    // },
    methods:{
      login(){
        if(this.account!='' && this.password!=''){
          //设置状态为正在登陆
          // this.isLogin=true
          //加密使用httpBasic验证
          let base64 = require('js-base64').Base64;
          // let auth = "Basic " + base64.encode("this.account+":"+this.password")
          let auth =base64.encode("yong")
          // let loginParam = {
          // "Authorization": auth
          // }
          console.log(auth)
        this.$http({
          method:'POST',
          url:'http://localhost:8081/login',
          body:{
            "username":"test",
            "password":"test"
          },
          // headers:{
            // "Access-Control-Allow-Origin": "*",
          // }, 
          // emulateJSON:true
          }).then((response) => {
            if(response.data.code == 0){
              console.log("success")
            }
          }, (response) => {
              console.log("login fail")
          });
        }else{
          console.log("account password error")
        }
      }
    }
}
</script>