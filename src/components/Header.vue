<template>
  <div class="nav">
    <router-link to="/index" class="navlist">首页</router-link>
    <router-link to="/ucenter" class="navlist">个人中心</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 'index'
    }
  },
  mounted () {
    console.log('selected', this.selected)
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
@import '../common/css/public.styl'
.nav{
  width 7rem;
  position fixed;
  top 1rem;
  left 1.5rem;
  height 1rem;
}
.navlist{
  width 3.5rem;
  float left
  text-align center
  height 1rem;
  line-height 1rem;
  }
</style>
