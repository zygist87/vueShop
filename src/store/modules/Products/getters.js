export default {
    products: state => {
        return state.products.map(product => {
            product = { ...product }
            product.stared = state.stared.includes(product.id)
            return product
        })
    }
}
