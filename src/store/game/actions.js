import axios from 'axios'
import { orderBy } from 'lodash'
import moment from 'moment'
import { Loading, Notify, LocalStorage } from 'quasar'

const api = 'http://douglasporto.com.br/api/public/api/v1'
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

export const changeTime = async ({ commit }) => {
  let payload
  if (LocalStorage.get.item('team')) {
    payload = JSON.parse(LocalStorage.get.item('team'))
    commit('CHANGE_LASTUP', LocalStorage.get.item('team_last_up'))
  } else {
    Loading.show()
    const response = await axios.get(
      api + '/games'
    )
    payload = response.data
    payload = orderBy(payload, ['date'], ['desc'])
    //  add lastup
    let lastup = moment().format('D/MM/YYYY - h:mm')
    LocalStorage.set('team_last_up', lastup)
    commit('CHANGE_LASTUP', lastup)
  }
  Loading.hide()
  commit('CHANGE_TIME', payload)
  LocalStorage.set('team', JSON.stringify(payload))
}

export const changeTimeApi = async ({ commit }) => {
  try {
    const response = await axios.get(
      api + '/games'
    )
    // add time
    let payload = response.data
    payload = orderBy(payload, ['date'], ['desc'])
    commit('CHANGE_TIME', payload)
    LocalStorage.set('team', JSON.stringify(payload))
    //  add lastup
    let lastup = moment().format('D/MM/YYYY - h:mm')
    LocalStorage.set('team_last_up', lastup)
    commit('CHANGE_LASTUP', lastup)
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
