<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import store from './store'

export default {
  name: 'app',
  store,
  components: {
    Home
  }
}
</script>