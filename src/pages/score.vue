<template>
  <q-pull-to-refresh :handler="refresher">
    <q-page class="img">
      <!--<img alt="Brain logo" src="~assets/brain.png" style="width: 90%;">-->
      <q-list>
        <q-list-header>
          Últimos resultados
          <div class="last_up">Última atualização: {{ date_last }}</div>
        </q-list-header>
        <q-item v-for="(p, index) in proximos" :key="index">
          <q-card inline class="card-game">
            <q-card-title>
              <div class="team text-left">{{ p.adversary }}</div>
              <div class="team text-right">UDF</div>
            </q-card-title>
            <q-card-main class="text-center">
              <p :class="resultColor(p.gols_adv_1, p.gols_udf_1)">
                {{ p.gols_adv_1 }} <i class="fas fa-times" /> {{ p.gols_udf_1 }}
              </p>
              <p :class="resultColor(p.gols_adv_2, p.gols_udf_2)">
                {{ p.gols_adv_2 }} <i class="fas fa-times" /> {{ p.gols_udf_2 }}
              </p>
            </q-card-main>
            <q-card-separator />
            <q-card-actions>
              <q-btn flat :label="p.date | date" icon="event"/>
              <q-btn flat :label="p.local" icon="place"/>
            </q-card-actions>
          </q-card>
        </q-item>
        <q-item style="margin-top: 10px;">
          <q-btn
            v-back-to-top.animate="{offset: 500, duration: 200}"
            round
            color="primary"
            class="fixed-bottom-right animate-pop shadow-8"
            style="margin: 0 15px 15px 0"
          >
            <q-icon name="keyboard_arrow_up" />
          </q-btn>
        </q-item>
      </q-list>
    </q-page>
  </q-pull-to-refresh>
</template>
<script>
import { openURL } from 'quasar'
export default {
  name: 'Games',
  computed: {
    proximos: function () {
      return this.$store.state.game.JogosRealizados
    },
    date_last: function () {
      return this.$store.state.game.last_up
    }
  },
  methods: {
    openURL,
    refresher (done) {
      setTimeout(() => {
        done()
        this.$store.dispatch('game/changeTimeApi')
      }, 1000)
    },
    resultColor: function (adv, udf) {
      adv = parseInt(adv)
      udf = parseInt(udf)
      if (adv === udf) {
        return 'text-blue'
      } else if (adv < udf) {
        return 'text-green'
      } else {
        return 'text-red'
      }
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
  }
}
</script>
<style scoped lang="stylus">
@import '~variables'
.card-game
  width 100%
  color themeColor !important
  .team
    display inline-block
    width 49%
    padding 0px 20px
  .q-card-main
    i
      padding 0px 30px
// .img
  // background-repeat: no-repeat;
  // background-size: 300px;
  // background-position-x: 50px;
  // background-position-y: 300px;
  // /* opacity: 0.1; */
  // background-image: linear-gradient(to bottom, rgba(255,255,255,0.9) 0%,rgba(255,255,255,255, 0.9) 100%), url(http://unidosdofinal.com.br/static/img/logo.ff97518.png);
.last_up
  font-size 0.6em
  margin-top -30px
</style>
