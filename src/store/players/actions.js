import axios from 'axios'
import { orderBy } from 'lodash'
import moment from 'moment'
import { Loading, Notify, LocalStorage } from 'quasar'

// const api = 'http://douglasporto.com.br/api/public/api/v1'
const api = 'http://localhost/api/v1'
// export default {
//   changeTime (context) {
//     axios.get('/games').then(response => response.data).then(data => {
//       let payload = data
//       payload = orderBy(payload, ['date'], ['desc'])
//       // this.$store.dispatch('changeTime', payload)
//       context.commit('CHANGE_TIME', payload)
//     })
//   }
// }

export const changePlayers = async ({ commit }) => {
  let payload
  if (LocalStorage.get.item('players')) {
    payload = JSON.parse(LocalStorage.get.item('players'))
    commit('CHANGE_LASTUP', LocalStorage.get.item('players_last_up'))
  } else {
    Loading.show()
    const response = await axios.get(
      api + '/players'
    )
    payload = response.data
    payload = orderBy(payload, ['gols'], ['desc'])
    //  add lastup
    let lastup = moment().format('D/MM/YYYY - h:mm')
    LocalStorage.set('players_last_up', lastup)
    commit('CHANGE_LASTUP', lastup)
  }
  Loading.hide()
  commit('CHANGE_PLAYERS', payload)
  LocalStorage.set('players', JSON.stringify(payload))
}

export const changePlayersApi = async ({ commit }) => {
  try {
    const response = await axios.get(
      api + '/players'
    )
    // add players
    let payload = response.data
    payload = orderBy(payload, ['gols'], ['desc'])
    commit('CHANGE_PLAYERS', payload)
    LocalStorage.set('players', JSON.stringify(payload))
    //  add lastup
    let lastup = moment().format('D/MM/YYYY - h:mm')
    LocalStorage.set('players_last_up', lastup)
    commit('CHANGE_LASTUP', lastup)
    Notify.create({
      message: 'Artilharia Atualizada!',
      position: 'center',
      color: 'secondary',
      timeout: 2000,
      icon: 'fa-check'
    })
  } catch (err) {
    console.log('erro', err)
    Notify.create({
      message: 'Algo de Errado',
      detail: 'Por Favor connect a internet.',
      position: 'center',
      icon: 'wifi'
    })
  }
}
