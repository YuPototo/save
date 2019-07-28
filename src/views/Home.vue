<template>
  <div class="home">
    <div class="save_list">
      <h3>节约记录</h3>
      <SaveItem
        v-for="(saving, index) in savings"
        :key="index"
        :saving="saving"
        @click.native="editSaving(saving)"
      />
    </div>
  </div>

</template>

<script>
import SaveItem from '../components/SaveItem'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    SaveItem
    },
  computed: {
    ...mapState({
      savings: state => state.savings
    })
  },
  methods: {
    editSaving(saving) {
      const time = saving.time
      this.$router.push({name: 'editSaving', params: { time }})
    },
  }
}
</script>