<template>
  <div>
    <div v-if="savingType === 'buyNone'">
      {{ saving.wantBuy.name }}：{{ saving.wantBuy.cost }}元
    </div>
    <div v-if="savingType === 'buyCheap'">
      <strike>{{ saving.wantBuy.name }}</strike> -> {{ saving.didBuy.name }}: {{ saving.wantBuy.cost - saving.didBuy.cost }}元
    </div>
  </div>
</template>

<script>
export default {
  name: 'SaveItem',
  props: ['saving'],
  computed: {
    savingType () {
      return 'didBuy' in this.saving ? 'buyCheap' : 'buyNone';
    }
  }
}
</script>

<style>
</style>
