export default () => ({
    products: [],
    stared: JSON.parse(localStorage.getItem('stared')) || []
})