<template>
<div>
  <div>
    <label for="want-buy-name">忍住没买</label>
    <input type="text" id="want-buy-name" v-model="wantBuy.name">
    <input type="number" id="want-buy-cost" v-model.number="wantBuy.cost">元
  </div>
  <div>
    <label for="did-buy-name">买了更便宜的</label>
    <input type="text" id="did-buy-name" v-model="didBuy.name">
    <input type="number" id="new-cost" v-model.number="didBuy.cost">元
  </div>
  <button @click="addSaving">添加</button>
</div>
</template>

<script>
export default {
  name: 'AddSaving',
  data () {
    return {
      wantBuy: {
        name: null,
        cost: null
      },
      didBuy: {
        name: null,
        cost: null
      }
    }
  },
  methods: {
    addSaving () {
      const saving = { wantBuy: this.wantBuy };
      if (this.didBuy.name !== null) saving.didBuy = this.didBuy;
      this.$store.dispatch('addSaving', saving);
    }
  }
}
</script>

<style>
</style>
