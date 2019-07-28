<template>
  <div>
    <h3>修改</h3>
    <div>
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
    >
      <div class="did-buy">
        <div class="did-buy-name">
          <label for="did-buy-name">替代品</label>
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
    <button @click="clickEdit()">确定修改</button>
    <button @click="clickDelete()">删除</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import _ from 'lodash'

export default {
  name: 'EditSaving',
  data () {
    return {
      savingEdited: {},
    }
  },
  computed: {
    savingType () {
      return 'didBuy' in this.savingEdited ? 'buyCheap' : 'buyNone'
    }
  },
  methods: {
    ...mapActions([
      'editSaving',
      'removeSaving'
    ]),
    clickEdit () {
      this.editSaving(this.savingEdited)
      this.savingEdited = {}
      this.$router.push('/')
    },
    clickDelete () {
      this.removeSaving(this.savingEdited)
      this.$router.push('/')
    }
  },
  created() {
    const time = Number.parseInt(this.$route.params.time)
    const saving = this.$store.state.savings.filter(saving => saving.time === time)[0]
    this.savingEdited = _.cloneDeep(saving)
  }
}
</script>

<style>
</style>
