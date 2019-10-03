import axios from '@/packages/vue-axios'
import { FETCH_PRODUCTS, FETCH_PRODUCT } from './action-types'
import { SET_POSTS } from './mutation-types'

export default {
    async [FETCH_PRODUCTS]({ commit }) {
        const { data } = await axios.get('/posts')
        commit(SET_POSTS, data)
    },

    async [FETCH_PRODUCT]({ state }, id) {
        const product = state.products.find(product => product.id === id)
        if (product) {
            return product
        }
        const { data } = await axios.get(`/posts/${id}`)
        return data
    }
}
