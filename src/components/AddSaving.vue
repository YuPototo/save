<template>
  <div class="add-saving">
    <input
      type="radio"
      name="saving-type"
      value="buyNone"
      id="buy-none"
      v-model="savingType"
    > <label for="buy-none">不买</label>
    <input
      type="radio"
      name="saving-type"
      value="buyCheap"
      id="buy-cheap"
      v-model="savingType"
    > <label for="buy-cheap">降级</label>

    <form>
      <div
        v-if="savingType==='buyNone'"
        class="want-buy"
      >
        <div>
          <label for="want-buy-name">商品</label>
          <input
            type="text"
            id="want-buy-name"
            v-model="buyNone.wantBuy.name"
          >
        </div>
        <div>
          <label for="want-buy-cost">价格</label>
          <input
            type="number"
            id="want-buy-cost"
            v-model.number="buyNone.wantBuy.cost"
          >
        </div>
      </div>
      <div
        v-if="savingType==='buyCheap'"
        class="add-saving-cheap"
      >
        <div class="want-buy">
          <h5>原商品</h5>
          <div class="want-buy-name">
            <label for="want-buy-name">商品</label>
            <input
              type="text"
              id="want-buy-name"
              v-model="buyCheap.wantBuy.name"
            >
          </div>
          <div class="want-buy-cost">
            <label for="want-buy-cost">价格</label>
            <input
              type="number"
              id="want-buy-cost"
              v-model.number="buyCheap.wantBuy.cost"
            >
          </div>
        </div>
        <div class="did-buy">
          <h5>替代品</h5>
          <div class="did-buy-name">
            <label for="did-buy-name">商品</label>
            <input
              type="text"
              id="did-buy-name"
              v-model="buyCheap.didBuy.name"
            >
          </div>
          <div class="did-buy-cost">
            <label for="did-buy-cost">价格</label>
            <input
              type="number"
              id="new-cost"
              v-model.number="buyCheap.didBuy.cost"
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
  name: 'AddSavings',
  data () {
    return {
      savingType: 'buyNone',
      buyNone: {
        wantBuy: {
          name: null,
          cost: null
        },
      },
      buyCheap: {
        wantBuy: {
          name: null,
          cost: null
        },
        didBuy: {
          name: null,
          cost: null
        }
      }
    }
  },
  methods: {
    ...mapActions([
      'addSaving'
    ]),
    onClickAdd () {
      let saving = this.savingType === 'buyNone' ? this.buyNone : this.buyCheap
      this.addSaving(saving)
      this.buyNone = {
        wantBuy: {
          name: null,
          cost: null
        }
      }
      this.buyCheap = {
        wantBuy: {
          name: null,
          cost: null
        },
        didBuy: {
          name: null,
          cost: null
        }
      }
    }
  }
}
</script>

<style>
</style>
