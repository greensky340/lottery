<template>
  <div class="content">
    <div>
      <div class="codeList" v-for="(obj,index) in orderContent" :key='index'>
        <div class="red">红球：{{obj.red}}</div>
        <div class="blue">蓝球：{{obj.blue}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { postData } from '../common/js/axios'
export default {
  data () {
    return {
      orderInfo: {},
      orderContent: []
    }
  },
  created () {
    this.touzhuId = this.$route.query.touzhuId
    console.log(this.touzhuId)
    this.orderInfo.touzhuId = this.touzhuId
    console.log(this.orderInfo)
    postData('http://lottery1.localhost/User/orderInfo', this.orderInfo)
      .then(res => {
        console.log(res)
        this.orderContent = res
      })
  }
}
</script>

<style lang="stylus" scoped>
@import '../common/css/public.styl'
.content
  width 10rem;
  position fixed;
  top 1rem;
  left 0rem;
  bottom 0rem;
  z-index 101;
  margin 0;
  padding 0;
  overflow auto;
  .codeList
    width 10rem;
    height 1.6rem;
    border-bottom 1px dashed #000;
    margin 0;
    padding 0;
    float left;
    .red
      width 10rem;
      height 0.8rem;
      line-height 0.8rem;
      color #ff0000;
      box-sizing border-box;
      padding-left 0.2rem;
      padding-right 0.2rem;
    .blue
      width 10rem;
      height 0.8rem;
      line-height 0.8rem;
      color #58aff9;
      box-sizing border-box;
      padding-left 0.2rem;
      padding-right 0.2rem;
</style>
