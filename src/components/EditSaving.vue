<template>
  <div>
    <EditSavingNone
      v-if="savingType==='buyNone'"
      :saving="saving"
      @inputChange="onEditingChange"
    />
    <EditSavingCheap
      v-if="savingType==='buyCheap'"
      :saving="saving"
      @inputChange="onEditingChange"
    />
    <button @click="clickEdit(editingSaving)">确定修改</button>
    <button @click="clickDelete(saving)">删除</button>
  </div>
</template>

<script>
import EditSavingCheap from './EditSavingCheap'
import EditSavingNone from './EditSavingNone'

import { mapActions } from 'vuex'

export default {
  name: 'EditSaving',
  data () {
    return {
      editingSaving: null,
    }
  },
  props: [
    'saving'
  ],
  components: {
    EditSavingCheap,
    EditSavingNone
  },
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
      'editSaving',
      'removeSaving'
    ]),
    onEditingChange (editingSaving) {
      this.editingSaving = editingSaving;
    },
    clickEdit (editingSaving) {
      this.editSaving(editingSaving);
      this.$emit('editDone');
    },
    clickDelete (saving) {
      this.removeSaving(saving);
      this.$emit('deleteDone');
    }
  }
}
</script>

<style>
</style>
