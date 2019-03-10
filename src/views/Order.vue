<template>
  <div class="content">
    <div class="orderList" v-for="(obj,index) in orderList" :key="index">
      <div class="touzhuId">投注ID：{{obj.touzhu_id}}</div>
      <div class="touzhuInfo">
        <div class="caipiaoType">大乐透</div>
        <div class="touzhuMoney">{{obj.sum_money}}元</div>
        <div class="touzhuTime">{{obj.touzhu_time}}</div>
        <div class="touzhuStatus">投注成功</div>
      </div>
      <div class="lookInfo" @click="orderInfo(obj.touzhu_id)">点此查看详情</div>
    </div>
  </div>
</template>

<script>
import { postData } from '../common/js/axios'
export default {
  data () {
    return {
      orderList: [],
      userInfo: {}
    }
  },
  created () {
    this.userInfo.username = 'user888'
    postData('http://lottery1.localhost/User/orderList', this.userInfo)
      .then(res => {
        console.log(res)
        this.orderList = res
      })
  },
  methods: {
    orderInfo: function (touzhuId) {
      // this.$router.push('/OrderInfo')
      this.$router.push({
        name: 'orderinfo',
        query: {
          touzhuId: touzhuId
        }
      })
    }
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
  .orderList
    width 10rem;
    border-bottom dashed #000 1px
    height 2.4rem;
    margin 0;
    padding 0;
    float left;
    .touzhuId
      width 10rem;
      height 0.8rem;
      margin 0 auto;
      line-height .8rem;
      box-sizing border-box;
      padding-left 0.2rem;
    .touzhuInfo
      width 10rem;
      height 0.8rem;
      margin 0 auto;
      box-sizing border-box;
      padding-left 0.2rem;
      padding-right 0.2rem;
      div
        line-height .8rem;
        float left;
        text-align center;
      .caipiaoType
        width 15%;
        text-align left;
      .touzhuMoney
        width 15%;
      .touzhuTime
        width 40%;
      .touzhuStatus
        width 30%;
    .lookInfo
      width 10rem;
      height 0.8rem;
      margin 0 auto;
      box-sizing border-box;
      padding-left 0.2rem;
      padding-right 0.2rem;
      text-align left;
      font-weight bolder;
</style>
