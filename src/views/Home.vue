<template>
  <div class="container">
    <div class="content">
      <div class="contitem" v-for="(elem,index) in lotterylist"
        :key="index"
        @click="jump(elem.icon)">
        <div class="contimg" >
          <div class="czicon">
            <LotteryIcon :icon="elem.icon"></LotteryIcon>
          </div>
        </div>
        <div class="conttitle">
          <p>{{elem.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { lotterylist } from '../common/js/lotteryList'
import LotteryIcon from '../components/base/IndexLotteryIcon.vue'
export default {
  name: 'Home',
  data () {
    return {
      lotterylist: []
    }
  },
  mounted () {
    console.log('mounted')
    this.lotterylist = lotterylist
  },
  methods: {
    jump (e) {
      console.log('jump' + e)
      this.$router.push('/' + e)
    }
  },
  computed: {
  },
  components: {
    LotteryIcon
  }
}
</script>
<style lang='stylus'>
.container
  font-size 16px
  padding-bottom: 55px
  width 10rem;
  padding-top 2rem;
  position fixed;
  left 0;
  top 0;
.content
  margin: 10px
  background-color: #fff
  padding: 20px
  border-radius 4px
  color: #333
  font-size: 14px
  display: flex
  flex-wrap: wrap
  .contitem
    width: 33.33%
    padding: 5px
    box-sizing: border-box
    .czicon
      display:block
      width 70px
      height: 70px
      margin: 0 auto 10px
    p
      text-align: center
      color: #333333
</style>
