<template>
  <div class="product">
    <button @click="$emit('click', product)">
      {{ product.stared ? 'unstar' : 'star' }}
    </button>
      <span v-if="product.stared">Stared!!</span>
    <h4> {{ product.title }} </h4>
    <p> {{ product.body }} </p>
    <router-link :to="{name: 'Product', params: {id: product.id}}">View this product</router-link>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      default: () => ({
        id: null,
        body: null,
        title: null,
        userId: null,
        stared: false
      })
    }
  }
}
</script>

<style lang="scss">
.product {
  border: 1px solid #ccc;
  margin: 10px;
  padding: 20px;
}
</style>