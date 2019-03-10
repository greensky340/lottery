<template>
  <div id="app">
    <div class="nav">
      <router-link to="/" class="navlist">首页</router-link>
      <router-link to="/order" class="navlist">订单</router-link>
      <router-link to="/ucenter" class="navlist">个人中心</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: 'index'
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
@import './common/css/public.styl'
.nav
  width 10rem;
  position fixed;
  top 0rem;
  height 1rem;
  padding-left 0.5rem;
  padding-right  0.5rem;
  font-size 0.4rem;
  left 0rem;
  z-index 100;
  background #ff0000;
.navlist
  width 3rem;
  float left
  text-align center
  height 1rem;
  line-height 1rem;
  padding 0rem;
  color #fff;
  &.router-link-exact-active{
    color #f00;
    background #fff;
}
</style>
