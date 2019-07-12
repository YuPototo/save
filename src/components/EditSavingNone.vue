<template>
  <div>
    <div>
      <label for="good">商品</label>
      <input
        type="text"
        id="good"
        v-model="editingSaving.wantBuy.name"
        @keyup="emitToParent"
      >
    </div>
    <div>
      <label for="cost">价格</label>
      <input
        type="number"
        id="cost"
        v-model.number="editingSaving.wantBuy.cost"
        @keyup="emitToParent"
      >
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'EditSavingNone',
  props: [
    "saving"
  ],
  data () {
    return {
      editingSaving: {
        id: this.saving.id,
        wantBuy: Vue.util.extend({}, this.saving.wantBuy)
      }
    }
  },
  methods: {
    emitToParent () {
      this.$emit('inputChange', this.editingSaving)
    }
  }
}
</script>

<style>
</style>
