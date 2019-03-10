<template>
  <div class="content">
    <div class="mainTitle">
      <div>至少选择<span style="color:#f00">5个红球</span><span style="color:#58aff9">2个蓝球</span></div>
      <div class="rand" @click="randBall()">点我随机</div>
    </div>
    <div class="red">
      <div class="redBall ball" v-for="(obj,index) in redBallArr" :key="index" :class="{redBg:obj.status==1}" @click="selectBall(index,'red')">{{obj.code}}</div>
    </div>
    <div class="blue">
      <div class="blueBall ball" v-for="(obj,index) in blueBallArr" :key="index" :class="{blueBg:obj.status==1}" @click="selectBall(index,'blue')">{{obj.code}}</div>
    </div>
    <div class="foot">
      <div class="footLeft">{{zhu}}注{{money}}元</div>
      <div class="footRight" @click="touzhu()">确定</div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import { loopBall, randRedBall, randBlueBall, countBall, calZhu } from '../common/js/dlt'
export default {
  data () {
    return {
      result: '1|2|3', // 投注结果
      resultObj: {},
      redBallArr: [],
      blueBallArr: [],
      zhu: 0, // 注数
      money: 0, // 金额
      selectedBallAll: [] // 全部号码
    }
  },
  methods: {
    randBall: function () {
      this.selectedBallAll = []
      this.redBallArr = randRedBall()
      this.blueBallArr = randBlueBall()
      this.selectedBallAll.push(countBall(this.redBallArr, this.blueBallArr))
      this.countMoney()
      console.log('this....', this.selectedBallAll)
      store.commit('setDlt', this.selectedBallAll)
    },
    selectBall: function (index, color) { // 选中球
      this.selectedBallAll = []
      index = JSON.stringify(index) //  如果不转成string 则 key === index 是false
      if (color === 'red') { // 红球
        let redBallArr = this.redBallArr
        for (let key in redBallArr) {
          if (key === index) {
            let Obj = redBallArr[index]
            if (Obj.status === 0) {
              Obj.status = 1
            } else {
              Obj.status = 0
            }
          }
        }
        this.redBallArr = redBallArr
      } else { // 蓝球
        let blueBallArr = this.blueBallArr
        for (let key in blueBallArr) {
          if (key === index) {
            let Obj = blueBallArr[index]
            if (Obj.status === 0) {
              Obj.status = 1
            } else {
              Obj.status = 0
            }
          }
        }
        this.blueBallArr = blueBallArr
      }
      this.selectedBallAll.push(countBall(this.redBallArr, this.blueBallArr))
      console.log('this....', this.selectedBallAll)
      this.countMoney()
      store.commit('setDlt', this.selectedBallAll)
    },
    countMoney: function () {
      this.zhu = calZhu(this.selectedBallAll)
      this.money = this.zhu * 2
    },
    touzhu: function () {
      console.log('resultObj', this.resultObj)
      if (this.zhu < 1) {
        alert('请选择号码')
        return false
      }
      this.$router.push('/DLTTZ')
    }
  },
  created: function () {
    this.redBallArr = loopBall(35)
    this.blueBallArr = loopBall(12)
    this.selectedBallAll = this.$store.state.dlt
  }
}
</script>
<style lang="stylus" scoped>
@import '../common/css/public.styl'
.content
  position: fixed;
  width: 10rem;
  background: #fff;
  z-index: 101;
  top:0;
  left:0;
  margin: 0rem;
  padding 0rem;
  .mainTitle
    width 10rem
    float left
    height get-rem(100px)
    margin 0rem
    div
      width 5rem
      float left
      height get-rem(100px)
      line-height get-rem(100px)
      text-align center
  .red
    width 10rem
    margin 0 auto
    .redBall
      border 1px solid #f00
      color #f00
    .redBg
      background #ff0000
      color #fff
  .blue
    width 10rem
    margin 0 auto
    .blueBall
      border 1px solid #58aff9
      color #58aff9
    .blueBg
      background #58aff9
      color #fff
  .ball
    width 1rem;
    height 1rem;
    border-radius 50%
    float left
    text-align center
    line-height 1rem
    margin-left 0.5rem
    margin-top 0.5rem
  .foot
    width 10rem
    height 1rem
    position fixed
    left 0
    bottom 0
    background #999
    .footLeft
      width 8rem
      height 1rem
      line-height 1rem
      text-align center
      float left
      color #000
    .footRight
      width 2rem
      height 1rem
      line-height 1rem
      text-align center
      float left
      background #f00
      color #fff
</style>
