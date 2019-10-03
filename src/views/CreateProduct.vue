<template>
  <div>
      <h1>Views CreateProduct</h1>
      <form action="">
          <label for="">Create new product</label>
          <input type="text" v-model="CreateProduct">
      </form>
  </div>
</template>

<script>
export default {
    name: 'CreateProduct',
    data () {
        return {
            CreateProduct: []
        }
    }
}
</script>

<style>
</style>