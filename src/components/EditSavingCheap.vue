<template>
  <div>
    <div>
      <h5>原商品</h5>
      <div class="old-good">
        <label for="old-good">商品</label>
        <input
          type="text"
          id="old-good"
          v-model="editingSaving.wantBuy.name"
          @keyup="emitToParent"
        >
      </div>
      <div class="old-cost">
        <label for="old-cost">价格</label>
        <input
          type="number"
          id="old-cost"
          v-model="editingSaving.wantBuy.cost"
          @keyup="emitToParent"
        >
      </div>
    </div>
    <div>
      <h5>替代品</h5>
      <div class="new-good">
        <label for="new-good">商品</label>
        <input
          type="text"
          id="new-good"
          v-model="editingSaving.didBuy.name"
          @keyup="emitToParent"
        >
      </div>
      <div class="new-cost">
        <label for="new-cost">价格</label>
        <input
          type="number"
          id="new-cost"
          v-model="editingSaving.didBuy.cost"
          @keyup="emitToParent"
        >
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'EditSavingCheap',
  data () {
    return {
      editingSaving: {
        id: this.saving.id,
        wantBuy: Vue.util.extend({}, this.saving.wantBuy),
        didBuy: Vue.util.extend({}, this.saving.didBuy)
      }
    }
  },
  props: [
    'saving'
  ],
  methods: {
    emitToParent () {
      this.$emit('inputChange', this.editingSaving)
    }
  }
}
</script>

<style>
</style>
