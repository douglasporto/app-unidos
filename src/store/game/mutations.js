// export default {
//   'CHANGE_TIME' (state, payload) {
//     state.time = payload
//     for (var cont in payload) {
//       if (payload[cont].status === 'R') {
//         state.JogosRealizados.push(payload[cont])
//       } else {
//         state.JogosPendentes.push(payload[cont])
//       }
//     }
//     state.JogosPendentes.reverse()
//   }
// }

export const CHANGE_TIME = (state, payload) => {
  state.time = payload
  for (var cont in payload) {
    if (payload[cont].status === 'R') {
      state.JogosRealizados.push(payload[cont])
    } else {
      state.JogosPendentes.push(payload[cont])
    }
  }
  state.JogosPendentes.reverse()
}
