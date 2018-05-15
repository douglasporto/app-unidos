<template>
  <q-page class="flex flex-center">
    <transition
      appear
      enter-active-class="animated bounceInLeft"
    >
      <img alt="Brain logo" src="~assets/brain.png" style="width: 90%;" v-show="brain">
    </transition>
    <transition
      appear
      enter-active-class="animated fadeIn"
    >
      <img alt="Unidos do FinaL logo" src="~assets/logo.png" style="width: 90%;" v-show="udf">
    </transition>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      brain: true,
      udf: false
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.brain = false
    }, 2000)
    setTimeout(() => {
      this.udf = true
    }, 2500)
  }
}
</script>
