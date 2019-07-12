<template>
  <div>
    <div>
      <label for="good">商品</label>
      <input
        type="text"
        id="good"
        v-model="wantBuy.name"
        @keyup="emitToParent"
      >
    </div>
    <div>
      <label for="cost">价格</label>
      <input
        type="number"
        id="cost"
        v-model.number="wantBuy.cost"
        @keyup="emitToParent"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddSavingNone',
  data () {
    return {
      wantBuy: {
        name: "",
        cost: ""
      }
    }
  },
  methods: {
    emitToParent () {
      this.$emit('inputChange', this.wantBuy)
    }
  }
}
</script>

<style>
</style>
