<template>
  <div class="create-product">
    <form @submit.prevent="handleSubmit">
      <label>
        Title:
        <input v-model="form.title" type="text">
      </label>
      <label>
        Body:
        <textarea v-model="form.body"></textarea>
      </label>

      <button type="submit"> Submit </button>
    </form>
  </div>
</template>

<script>
import { CREATE_PRODUCT } from '@/store/modules/Products/action-types'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('Products')
export default {
  name: 'CreateProduct',
  data () {
    return {
      form: {
        title: null,
        body: null
      }
    }
  },
  methods: {
    ...mapActions({
      createProduct: CREATE_PRODUCT
    }),
    async handleSubmit () {
      await this.createProduct(this.form)
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style lang="scss">
.create-product {
  form {
    display: flex;
    flex-flow: column;

    label {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      input,
      textarea {
        width: 100%;
      }
    }
  }
}
</style>
