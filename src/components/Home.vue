<template>
  <div class="home">
    <div class="save_list">
      <h3>节约记录</h3>
      <SaveItem
        v-for="(saving, index) in savings"
        :key="index"
        :saving="saving"
        @click.native="editingSaving=saving"
      />
    </div>
    <hr>
    <div class="save_total">
      <h3>节约累计</h3>
      <SaveCount />
    </div>
    <hr>
    <div class="add_save">
      <h3>新增节约</h3>
      <AddSaving />
    </div>
    <hr>
    <div class="edit_save">
      <h3>修改节约</h3>
      <EditSaving
        :saving="editingSaving"
        @editDone="onEditDone"
        @deleteDone="onDeleteDone"
      />
    </div>
  </div>

</template>

<script>
import SaveItem from './SaveItem'
import SaveCount from './SaveCount'
import AddSaving from './AddSaving'
import EditSaving from './EditSaving'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      editingSaving: null,
    }
  },
  components: {
    SaveItem,
    SaveCount,
    AddSaving,
    EditSaving
  },
  computed: {
    ...mapState({
      savings: state => state.savings
    })
  },
  methods: {
    onEditDone () {
      this.editingSaving = null;
    },
    onDeleteDone () {
      this.editingSaving = null;
    }
  }
}
</script>