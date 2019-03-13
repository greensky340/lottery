<template>
  <div class="content">
    <div class="header">
      <div @click="back()">手动选号</div>
      <div @click="randBall()">机选号码</div>
    </div>
    <div class="main">
      <div class="ballList" v-for="(obj,index) in selectedBallAll" :key='index'>
        <div class="redBall" v-for="(rCode,rIndex) in selectedBallAll[index].red" :key="'r'+rIndex">{{rCode}}</div>
        <div class="blueBall" v-for="(bCode,bIndex) in selectedBallAll[index].blue" :key="'b'+bIndex">{{bCode}}</div>
        <div class="delBall" @click="delBall(index)">x</div>
      </div>
    </div>
    <div class="bei">
      倍数：<input type="text" v-model='bei' value="1" v-on:input="countMoney">
    </div>
    <div class="foot">
      <div class="info">{{zhu}}注{{money}}元</div>
      <div class="sub" @click="touzhu()">确定</div>
    </div>
  </div>
</template>
<script>
import store from '@/store'
import { randRedBall, randBlueBall, countBall } from '../common/js/ssq'
import { postData } from '../common/js/axios'
export default {
  data () {
    return {
      selectedBallAll: [],
      zhu: 0,
      money: 0,
      bei: 1,
      resultObj: {}
    }
  },
  created () {
    console.log(this.$store.state.ssq)
    this.selectedBallAll = this.$store.state.ssq
    this.countMoney()
  },
  methods: {
    back: function () {
      this.$router.push(
        '/ssq'
      )
    },
    randBall: function () {
      this.redBallArr = randRedBall()
      this.blueBallArr = randBlueBall()
      this.selectedBallAll.unshift(countBall(this.redBallArr, this.blueBallArr, 1)) // 机选 1注
      this.countMoney()
      store.commit('setSsq', this.selectedBallAll)
    },
    countMoney: function () {
      let zhu = 0
      for (let i = 0; i < this.selectedBallAll.length; i++) {
        zhu += this.selectedBallAll[i].zhu
      }
      this.zhu = zhu
      this.money = this.zhu * 2 * this.bei
      let resultObj = {}
      resultObj.issue = '20191111'
      resultObj.bei = 1
      resultObj.zhuijia = 0
      resultObj.caipiao_type = 'ssq'
      resultObj.sum_money = this.money
      resultObj.touzhuInfo = this.selectedBallAll
      resultObj.quan_id = 0
      resultObj.username = 'user888'
      this.resultObj = resultObj
    },
    delBall: function (index) {
      this.selectedBallAll.splice(index, 1)
      store.commit('setSsq', this.selectedBallAll)
      this.countMoney()
    },
    touzhu: function () {
      postData('http://lottery1.localhost/Touzhu/touzhu', this.resultObj)
        .then(res => {
          console.log(res)
          if (res.code === 1) {
            alert('投注成功')
          }
        })
    }
  },
  computed: {
    // codeList () {
    //   console.log('--', this.$store.state.ssq)
    //   return this.$store.state.ssq
    // }
  }
}
</script>

<style lang='stylus' scoped>
@import '../common/css/public.styl'
.content
  position fixed;
  left 0rem;
  top 0rem
  bottom 0rem;
  right 0rem;
  z-index 101;
  background #fff;
  margin 0;
  padding 0;
  border-radius 0;
  .header
    width 10rem;
    height 1rem;
    margin 0 auto;
    position fixed;
    left 0rem;
    top 0.5rem;
    div
      width 4rem;
      height 0.8rem;
      float left
      margin-left 0.5rem;
      margin-right 0.5rem;
      background #f00;
      text-align center;
      line-height 0.8rem;
      color #fff;
  .main
    width 10rem;
    position fixed;
    left 0rem;
    top 1.5rem;
    bottom 2rem;
    z-index 102;
    .ballList
      width 10rem;
      float left;
      border-bottom 1px #999 dashed
      height auto;
      .redBall
        width 1rem;
        height 1rem;
        background #f00;
        color #fff;
        line-height 1rem;
        text-align center;
        float left;
        border-radius 50%;
        margin-left 0.5rem;
        margin-bottom 0.2rem;
        margin-top 0.2rem;
      .blueBall
        width 1rem;
        height 1rem;
        background #58aff9;
        color #fff;
        line-height 1rem;
        text-align center;
        float left;
        border-radius 50%;
        margin-left 0.5rem;
        margin-bottom 0.2rem;
        margin-top 0.2rem;
      .delBall
        width 1rem;
        height 1rem;
        color #999;
        line-height 1rem;
        text-align center;
        float left;
        border-radius 50%;
        margin-left 0.5rem;
        margin-bottom 0.2rem;
        margin-top 0.2rem;
        font-size 0.8rem;
  .bei
    width 10rem
    position fixed;
    left 0rem;
    bottom 1rem;
    height 1rem;
    z-index 102;
    background #c0c0c0;
    display flex;
    justify-content flex-start;
    align-items center;
    box-sizing border-box
    padding-left 0.5rem;
    color #333;
  .foot
    width 10rem
    position fixed;
    left 0rem;
    bottom 0rem;
    height 1rem;
    z-index 102;
    background #000;
    .info
      width 7rem;
      height 1rem;
      float left;
      line-height 1rem;
      text-align center;
      color #fff;
    .sub
      width 3rem;
      height 1rem;
      float left;
      line-height 1rem;
      text-align center;
      color #fff;
      background #f00;
</style>
