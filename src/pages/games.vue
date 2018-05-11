<template>
  <q-page>
    <!--<img alt="Brain logo" src="~assets/brain.png" style="width: 90%;">-->
    <q-list highlight>
      <q-list-header>Próximos Jogos</q-list-header>
      <q-item v-for="p in proximos" :key="p.date">
        <q-item-main :label="p.adversary" :sublabel="p.date | date" />
      </q-item>
    </q-list>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Games',
  computed: {
    proximos: function () {
      return this.$store.state.game.JogosPendentes
    }
  },
  filters: {
    date: function (date) {
      let d = date.substr(8, 2)
      let m = date.substr(5, 2)
      let y = date.substr(0, 4)
      let h = date.substr(11, 5)
      return d + '/' + m + '/' + y + ' - ' + h
    }
  },
  mounted: function () {
    console.log('mount')
    this.$store.dispatch('game/changeTime')
  }
}
</script>
