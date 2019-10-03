import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})
