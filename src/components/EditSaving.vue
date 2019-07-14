<template>
  <div>
    <div
      v-if="savingType==='buyNone'"
      class="add-saving-none"
    >
      <div>
        <label for="want-buy-name">商品</label>
        <input
          type="text"
          id="want-buy-name"
          v-model="savingEdited.wantBuy.name"
        >
      </div>
      <div>
        <label for="want-buy-cost">价格</label>
        <input
          type="number"
          id="want-buy-cost"
          v-model.number="savingEdited.wantBuy.cost"
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
            v-model="savingEdited.wantBuy.name"
          >
        </div>
        <div class="want-buy-cost">
          <label for="want-buy-cost">价格</label>
          <input
            type="number"
            id="want-buy-cost"
            v-model.number="savingEdited.wantBuy.cost"
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
            v-model="savingEdited.didBuy.name"
          >
        </div>
        <div class="did-buy-cost">
          <label for="did-buy-cost">价格</label>
          <input
            type="number"
            id="new-cost"
            v-model.number="savingEdited.didBuy.cost"
          >
        </div>
      </div>
    </div>
    <button @click="clickEdit(savingEdited)">确定修改</button>
    <button @click="clickDelete(saving)">删除</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Vue from 'vue'

export default {
  name: 'EditSaving',
  data () {
    return {
      savingEdited: {},
    }
  },
  props: [
    'saving'
  ],
  computed: {
    savingType () {
      if (this.saving) {
        return 'didBuy' in this.saving ? 'buyCheap' : 'buyNone';
      }
      return null;
    }
  },
  methods: {
    ...mapActions([
      'updateSaving',
      'removeSaving'
    ]),
    clickEdit (savingEdited) {
      this.updateSaving(savingEdited);
      this.$emit('editDone');
      this.savingEdited = {}
    },
    clickDelete (saving) {
      if (saving) {
        this.removeSaving(saving);
        this.$emit('deleteDone');
      }
    }
  },
  watch: {
    saving: function (newSaving) {
      if (newSaving) {
        this.savingEdited.time = this.saving.time;
        this.savingEdited.wantBuy = Vue.util.extend({}, this.saving.wantBuy)
        if (this.savingType === 'buyCheap') {
          this.savingEdited.didBuy = Vue.util.extend({}, this.saving.didBuy)
        }
      }
    }
  }
}
</script>

<style>
</style>
