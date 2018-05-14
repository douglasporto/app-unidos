<template>
  <q-pull-to-refresh :handler="refresher">
    <q-page class="img">
      <!--<img alt="Brain logo" src="~assets/brain.png" style="width: 90%;">-->
      <q-list>
        <q-list-header>
          Próximos Jogos
          <div class="last_up">Última atualização: {{ date_last }}</div>
        </q-list-header>
        <q-item v-for="(p, index) in proximos" :key="index">
          <q-card inline class="card-game">
            <q-card-title>
              {{ p.adversary }}
            </q-card-title>
            <q-card-main>
              <p>
                <q-btn flat :label="p.local" @click="pushMaps(index)" icon="place"/>
              </p>
            </q-card-main>
            <q-card-separator />
            <q-card-actions>
              <q-btn flat round dense icon="event" />
              <q-btn flat :label="p.date | date" @click="pushCalendar(index)" />
            </q-card-actions>
          </q-card>
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
      return this.$store.state.game.JogosPendentes
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
    pushCalendar (i) {
      let day = this.dateCalendar(this.proximos[i].date)
      let url = 'https://www.google.com/calendar/render?action=TEMPLATE&text=Jogo+Unidos+do+Final&details=Adversario+' + this.proximos[i].adversary + '&dates=' + day
      openURL(url)
    },
    pushMaps (i) {
      let local = this.proximos[i].local
      let url = 'https://maps.google.com.br/maps?q=' + local.replace(' ', '+')
      openURL(url)
    },
    dateCalendar: function (date) {
      let d = date.substr(8, 2)
      let m = date.substr(5, 2)
      let y = date.substr(0, 4)
      let hi = (parseInt(date.substr(11, 2)) + 3) + date.substr(13, 3) + '00'
      let hf = (parseInt(date.substr(11, 2)) + 5) + date.substr(13, 3) + '00'
      let datein = y + m + d + 'T' + hi.replace(':', '') + 'Z/'
      let datefin = y + m + d + 'T' + hf.replace(':', '') + 'Z'
      return datein + datefin
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
