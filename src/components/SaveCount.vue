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
    ...mapState(['savings']),
    totalSavings () {
      return this.savings.reduce((accumulator, saving) => accumulator + saving.wantBuy.cost - (saving.didBuy ? saving.didBuy.cost : 0), 0);
    }
  }
}
</script>

<style>
</style>
