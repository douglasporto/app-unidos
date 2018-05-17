<template>
  <q-pull-to-refresh :handler="refresher">
    <q-page>
      <q-list>
        <q-collapsible v-for="j in players" :key="j.id" icon="explore" :label="j.nickname + ' - ' + j.gols + ' gols'">
          <div>
            Nome: {{ j.name }}
          </div>
        </q-collapsible>
      </q-list>
    </q-page>
  </q-pull-to-refresh>
</template>
<script>
// import { openURL } from 'quasar'
export default {
  name: 'Players',
  computed: {
    players: function () {
      return this.$store.state.players.players
    },
    date_last: function () {
      return this.$store.state.players.last_up_players
    }
  },
  mounted: function () {
    this.$store.dispatch('players/changePlayers')
  }
}
</script>
<style scoped lang="stylus">
@import '~variables'

</style>
