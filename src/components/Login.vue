<template>
<div class="container">
<link href="http://v3.bootcss.com/examples/signin/signin.css" rel="stylesheet">
      <form class="form-signin">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="inputAccount" class="sr-only">账号</label>
        <input type="text" placeholder="账号" id = "inputAccount" class="form-control" v-model="account">
        <label for="inputPassword" class="sr-only">密码</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="password">
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login">Sign in</button>
      </form>

    </div> <!-- /container -->
</template>
<script>
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
    methods:{
      login(){
        if(this.account!='' && this.password!=''){
          let base64 = require('js-base64').Base64;
          let auth = "Basic " + base64.encode("yong"+":"+"passw0rd")
          let formdata = new FormData();
          formdata.append('username',this.account);
          formdata.append('password',this.password);
          formdata.append('grant_type','password');
        this.$http({
          method:'POST',
          url:'http://localhost:8081/api/oauth/token',
          body:formdata,
          // emulateJSON: true,
          headers:{
            "Authorization": auth,
            "Content-Type":"multipart/form-data"
          }
          }).then((response) => {
            if(response.data.code == 0){
              console.log("success")
              this.$router.push('/user_info')
            }
          }, (response) => {
              console.log("login fail")
              this.$router.push('/user_info')
          });
        }else{
          console.log("account password error")
        }
      }
    }
}
</script>