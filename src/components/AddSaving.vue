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
      <AddSavingNone
        v-if="savingType==='buyNone'"
        @inputChange='onSavingNoneChange'
      />
      <AddSavingCheap
        v-if="savingType==='buyCheap'"
        @inputChange='onSavingCheapChange'
      />

      <button @click.prevent="addSaving(saving)">新增节约</button>
    </form>
  </div>
</template>

<script>
import AddSavingCheap from './AddSavingCheap'
import AddSavingNone from './AddSavingNone'

import { mapActions } from 'vuex'

export default {
  name: 'AddSavings',
  data () {
    return {
      savingType: 'buyNone',
      saving: {}
    }
  },
  components: {
    AddSavingCheap,
    AddSavingNone
  },
  methods: {
    ...mapActions([
      'addSaving'
    ]),
    onSavingNoneChange (wantBuy) {
      this.saving.wantBuy = wantBuy;
    },
    onSavingCheapChange (wantBuy, didBuy) {
      this.saving.wantBuy = wantBuy;
      this.saving.didBuy = didBuy;
    }
  }
}
</script>

<style>
</style>
