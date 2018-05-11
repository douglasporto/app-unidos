import Vue from 'vue'

Vue.filters('date', function (date) {
  let d = date.substr(8, 2)
  let m = date.substr(5, 2)
  let y = date.substr(0, 4)
  let h = date.substr(11, 5)
  return d + '/' + m + '/' + y + ' - ' + h
})