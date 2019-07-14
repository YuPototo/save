<template>
<div>
  <div>
    <label>忍住没买的</label>
    <input v-model="wantBuy.name">
    <input type="number" v-model.number="wantBuy.cost">元
  </div>
  <div>
    <label>买了更便宜</label>
    <input v-model="didBuy.name">
    <input type="number" v-model.number="didBuy.cost">元
  </div>
  <button @click="addSaving">添加</button>
</div>
</template>

<script>
export default {
  name: 'AddSaving',
  data() {
    return {
      wantBuy: { name: null, cost: null },
      didBuy: { name: null, cost: null }
    }
  },
  methods: {
    addSaving () {
      const saving = { wantBuy: { ...this.wantBuy } };
      if (this.didBuy.name !== null) saving.didBuy = { ...this.didBuy };
      this.$store.dispatch('addSaving', saving);
      this.reset();
    },
    reset() {
      this.wantBuy = { name: null, cost: null };
      this.didBuy = { name: null, cost: null };
    }
  }
}
</script>

<style>
</style>
