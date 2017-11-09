<template>
  <div id="app">
    <chead></chead>
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
  import CustomHead from 'components/CumstomHead'
  import Tab from 'components/tab'
  export default {
    components: {
      'chead': CustomHead,
      'tab': Tab
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  p{
    color: blue;
  }
</style>
