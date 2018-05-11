import axios from 'axios'
import { orderBy } from 'lodash'

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
  const api = 'http://douglasporto.com.br/api/public/api/v1'
  const response = await axios.get(
    api + '/games'
  )
  let payload = response.data
  payload = orderBy(payload, ['date'], ['desc'])
  commit('CHANGE_TIME', payload)
}
