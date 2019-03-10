<template>
<div class="lotteryImg">
  <img :src="img">
</div>
</template>

<script>
export default {
  img: '',
  name: 'IndexLotteryIcon',
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  created () {
    this.img = require('../../assets/lotteryIcon/' + this.icon + '@2x.png')
  }
}
</script>
<style lang='stylus'>
@import "../../common/css/public.styl"
.lotteryImg{
  /* width (140/75)rem; */
  width get-rem(140px)
}
.lotteryImg img{
  width (140/75)rem;
}
</style>
