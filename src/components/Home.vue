<template>
  <div class="home">
    <h3>节约累计 {{ totalSavings }} 元</h3>
    <div v-for="(saving, i) in savings" :key="i">
      <input v-model="saving.wantBuy.name"><input type="number" v-model.number="saving.wantBuy.cost">元
      <span v-if="saving.didBuy"> -> <input v-model="saving.didBuy.name"> <input type="number" v-model.number="saving.didBuy.cost">元</span>
      <button @click="removeSaving(saving)">x</button>
    </div>
    <hr>
    <h3>新增节约</h3>
    <AddSaving />
  </div>
</template>

<script>
import AddSaving from './AddSaving';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    AddSaving
  },
  computed: {
    ...mapState(['savings']),
    totalSavings() {
      return this.savings.reduce((accumulator, saving) => accumulator + saving.wantBuy.cost - (saving.didBuy ? saving.didBuy.cost : 0), 0);
    }
  },
  methods: {
    ...mapActions(['removeSaving'])
  }
}
</script>