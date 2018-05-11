import axios from 'axios'
// import { defaults } from 'lodash'
export default ({ Vue }) => {
  Vue.prototype.$axios = axios
}

// const api = 'http://douglasporto.com.br/api/public/api/v1'

// export const createClient = (options = {baseURL: api}) => axios.create(defaults({}, options))

// export default createClient()
