<template>
<div>
    <h1>{{$route.params.id}}</h1>
    {{product}}
    
</div>
  
</template>

<script>
import {FETCH_PRODUCT} from '@/store/modules/Products/action-types'
import {createNamespacedHelpers} from 'vuex'
const {mapActions} = createNamespacedHelpers('Products')

export default {
    name: 'Product',
    data() {
        return {
            product: null
        }
    },
    async created () {
        this.product = await this.fetchProduct(this.$route.params.id)
        console.log(this.product)
    },
    methods: {
        ...mapActions({
            fetchProduct: FETCH_PRODUCT,
        })
    }
}
</script>

<style>
</style>
