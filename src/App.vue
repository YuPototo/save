<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/add">新增节约</router-link> |
      <router-link to="/count">节约累计</router-link> 
    </div>
    <router-view/>
  </div>
</template>


<script>
export default {
    created(){
      console.log('created run')
      this.$store.dispatch('fetchSavings')
    }
}
</script>


<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
