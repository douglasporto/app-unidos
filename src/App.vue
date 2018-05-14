<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted: function () {
    this.$store.dispatch('game/changeTime')
  }
}
</script>

<style>
</style>
