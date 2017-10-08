<template>
<div class="container" id="app">
  <transition name="fade">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </transition>
</div>
</template>

<script>
export default{
  mounted(){
    // 组件开始挂载时获取用户信息
    this.getUserInfo();
  },
  methods:{
    getUserInfo(){
      console.log("this is get userInfo")
    },
  }
}
</script>