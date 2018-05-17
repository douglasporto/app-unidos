import Vue from 'vue'
import Vuex from 'vuex'

import game from './game'
import players from './players'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    game,
    players
  }
})

export default store
