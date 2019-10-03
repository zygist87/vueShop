import { SET_POSTS, STAR_PRODUCT } from './mutation-types'

export default {
    [SET_POSTS](state, products) {
        state.products = products
    },
    [STAR_PRODUCT](state, id) {
        const exists = state.stared.includes(id)
        if (exists) {
            state.stared = state.stared.filter(product => product !== id)
        } else {
            state.stared = [...state.stared, id]
        }
        localStorage.setItem('stared', JSON.stringify(state.stared))
    }
}
