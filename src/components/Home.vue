<template>
  <div class="home">
    <h3>节约记录</h3>
    <div v-for="(saving, index) in savings" :key="index" @click="savingInEdit=saving">
      {{ saving.wantBuy.name }} {{ saving.wantBuy.cost }}元<span v-if="saving.didBuy"> -> {{ saving.didBuy.name }} {{ saving.didBuy.cost }}元</span>
    </div>
    <hr>
    <h3>节约累计 {{ totalSavings }} 元</h3>
    <hr>
    <h3>新增节约</h3>
    <AddSaving />
    <hr>
    <h3>修改节约</h3>
    <EditSaving :saving="savingInEdit" @editDone="onEditDone" @deleteDone="onDeleteDone"/>
  </div>
</template>

<script>
import AddSaving from './AddSaving'
import EditSaving from './EditSaving'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      savingInEdit: null,
    }
  },
  components: {
    AddSaving,
    EditSaving
  },
  computed: {
    ...mapState({
      savings: state => state.savings,
      totalSavings: state => state.savings.reduce((accumulator, saving) => accumulator + (saving.didBuy ? (saving.wantBuy.cost - saving.didBuy.cost) : saving.wantBuy.cost), 0)
    })
  },
  methods: {
    onEditDone () {
      this.savingInEdit = null;
    },
    onDeleteDone () {
      this.savingInEdit = null;
    }
  }
}
</script>