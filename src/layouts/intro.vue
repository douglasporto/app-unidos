<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <transition
        appear
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated bounceInLeft"
      >
        <router-view />
      </transition>
      <q-ajax-bar ref="bar" :position="position" :reverse="reverse" :color="color" />
    </q-page-container>
  </q-layout>
</template>
<!--<template>-->
<!--  <q-pull-to-refresh :handler="refresher">-->
    <!-- Content, whatever you like -->
<!--    <p>-->
<!--      Lorem ipsum dolor sit amet...-->
<!--    </p>-->
<!--  </q-pull-to-refresh>-->
<!--</template>-->

<script>
export default {
  name: 'LayoutIntro',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      position: 'top',
      color: 'secondary',
      reverse: false,
      size: 6,
      timeouts: []
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.$router.replace('/games')
    }, Math.random() * 5000 + 2000)
  }
}
</script>

<style scope lang='stylus'>
@import '~variables'
.sidebar
  color themeColor
  padding 0
  :nth-child(2)
      top 130px
  .q-list,
  .q-list-header
    padding 0
</style>
