<template>
  <div class="container">
    <div class="logo">
      <img class="img-logo" alt="UDF logo" src="~assets/logo.png">
    </div>
    <div class="desc-title">
      Unidos do Final
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sidebar-Header'
}
</script>
<style scoped lang='stylus'>
@import '~variables'
.container
  background #00b4f0
  background -moz-linear-gradient(-45deg, #00b4f0 6%, #FFF 63%)
  background -webkit-linear-gradient(-45deg, #00b4f0 6%,#FFF 63%)
  background linear-gradient(135deg, #00b4f0 6%,#FFF 63%)
  // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00b4f0', endColorstr='#e5e5e5',GradientType=1 )
  padding 10px
  position fixed
  width 100%
  .logo
    display inline-block
    position relative
    vertical-align text-top
    .img-logo
      width 70px
  .desc-title
    color themeColor
    display inline-block
    font-size 1.5em
    font-weight 800
    position absolute
    right 15%
    top 25%
</style>
