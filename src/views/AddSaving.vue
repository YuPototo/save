<template>
  <div>
    <h3>添加一次节约</h3>
    <input
      type="radio"
      name="saving-type"
      value="buyNone"
      id="buy-none"
      v-model="savingType"
    > <label for="buy-none">忍住没买</label>
    <input
      type="radio"
      name="saving-type"
      value="buyCheap"
      id="buy-cheap"
      v-model="savingType"
    > <label for="buy-cheap">买更便宜的</label>

    <form>
      <div class="want-buy">
        <div>
          <label for="want-buy-name">商品</label>
          <input
            type="text"
            id="want-buy-name"
            name="want-buy-name"
            v-model="wantBuy.name"
          >
        </div> 
        <div>
          <label for="want-buy-cost">价格</label>
          <input
            type="number"
            id="want-buy-cost"
            v-model.number="wantBuy.cost"
          >
        </div>
      </div>
      <div
        v-if="savingType==='buyCheap'"
        class="add-saving-cheap"
      >
        <div class="did-buy">
          <div class="did-buy-name">
            <label for="did-buy-name">替代品</label>
            <input
              type="text"
              id="did-buy-name"
              v-model="didBuy.name"
            >
          </div>
          <div class="did-buy-cost">
            <label for="did-buy-cost">价格</label>
            <input
              type="number"
              id="new-cost"
              v-model.number="didBuy.cost"
            >
          </div>
        </div>
      </div>
      <button @click.prevent="onClickAdd">新增节约</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddSaving',
  data () {
    return {
      savingType: 'buyNone',
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
    ...mapActions([
      'addSaving'
    ]),
    onClickAdd () {
      const saving = { wantBuy: { ...this.wantBuy } }
      if (this.didBuy.name !== null) saving.didBuy = { ...this.didBuy }
      this.addSaving(saving)
      this.reset()
      this.$router.push('/')
    },
    reset() {
      this.wantBuy = { name: null, cost: null }
      this.didBuy = { name: null, cost: null }
    }
  }
}
</script>

<style>
</style>
