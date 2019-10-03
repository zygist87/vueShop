<template>
<div class="home">
    <Product
    v-for="product in products" 
    :key="product.id"
    :product="product"
    @click="starProduct">
    >
    </Product>
    <CreateProduct/>
    
</div>
</template>

<script>
import Product from '@/components/Product'
import CreateProduct from '@/components/CreateProduct'
import {FETCH_PRODUCTS} from '@/store/modules/Products/action-types'
import {STAR_PRODUCT} from '@/store/modules/Products/mutation-types'
import {createNamespacedHelpers} from 'vuex'
const {mapActions, mapGetters, mapMutations} = createNamespacedHelpers('Products')

export default {
  name: 'HomeView',
  components: {
    Product,
    CreateProduct
  },
  computed: {
    ...mapGetters({
      products: "products"
    })
  },
  created() {
    this.fetchProducts()
  },
  methods: {
    ...mapActions({
      fetchProducts: FETCH_PRODUCTS
    }),
    ...mapMutations({
      setStarOnProduct: STAR_PRODUCT
    }),
    starProduct(product) {
      this.setStarOnProduct(product.id)
    }
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  & > * {
    flex: 0 0 25%;
  }
}
</style>
