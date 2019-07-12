<template>
  <div>
    总节约金额：{{ totalSavings }} 元
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SaveCount',
  computed: {
    ...mapState({
      totalSavings (state) {
        return state.savings.map(function (saving) {
          let saveAmount
          if ('didBuy' in saving) {
            saveAmount = saving.wantBuy.cost - saving.didBuy.cost;
          } else {
            saveAmount = saving.wantBuy.cost;
          }
          return saveAmount
        }).reduce((a, b) => a + b, 0)
      }
    })
  }
}
</script>

<style>
</style>
