<template>
  <q-pull-to-refresh :handler="refresher">
    <q-page>
      <q-list>
        <q-list-header>
          Artilharia
          <div class="last_up">Última atualização: {{ date_last }}</div>
        </q-list-header>
        <q-collapsible popup v-for="j in players" avatar="statics/players.png" :key="j.id" :label="j.nickname"  :sublabel="j.gols + ' gols'">
          <!--<div>-->
          <!--  Nome: {{ j.name }}-->
          <!--</div>-->
          <!--<div>-->
          <!--  Nome: {{ j.name }}-->
          <!--</div>-->
          <q-list>
            <q-list-header inset>Informações</q-list-header>
            <q-item>
              <q-item-side icon="account_box" color="primary" />
              <q-item-main>
                <q-item-tile color="primary" label>Nome</q-item-tile>
                <q-item sublabel>{{ j.name }}</q-item>
              </q-item-main>
            </q-item>
            <q-item-separator inset />
            <q-item>
              <q-item-side icon="account_box" color="primary" />
              <q-item-main>
                <q-item-tile color="primary" label>Jogos</q-item-tile>
                <q-item sublabel>{{ j.games }}</q-item>
              </q-item-main>
              <q-item-side icon="account_box" color="primary" />
              <q-item-main>
                <q-item-tile color="primary" label>Desde</q-item-tile>
                <q-item sublabel>{{ j.date | date  }}</q-item>
              </q-item-main>
            </q-item>
            <q-item>
              <q-item-side icon="class" color="warning" />
              <q-item-main>
                <q-item-tile color="warning" label>C.Amarelo</q-item-tile>
                <q-item sublabel>{{ j.yellow_card }}</q-item>
              </q-item-main>
              <q-item-side icon="class" color="negative" />
              <q-item-main>
                <q-item-tile color="negative" label>C.Vermelho</q-item-tile>
                <q-item sublabel>{{ j.red_card }}</q-item>
              </q-item-main>
            </q-item>
          </q-list>
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
  methods: {
    refresher (done) {
      setTimeout(() => {
        done()
        this.$store.dispatch('players/changePlayersApi')
      }, 1000)
    }
  },
  filters: {
    date: function (date) {
      let d = date.substr(8, 2)
      let m = date.substr(5, 2)
      let y = date.substr(0, 4)
      return d + '/' + m + '/' + y
    }
  },
  mounted: function () {
    this.$store.dispatch('players/changePlayers')
  }
}
</script>
<style scoped lang="stylus">
@import '~variables'
.card-game
  width 100%
  color themeColor !important
.last_up
  font-size 0.6em
  margin-top -30px
.q-collapsible-opened
  padding 15px 5px !important
</style>
