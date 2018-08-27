<template>
  <div id="app">
    <appheader></appheader>

    <router-view/>

    <appfooter></appfooter>
  </div>
</template>

<script>
import header from './components/staticComp/header.vue'
import footer from './components/staticComp/footer.vue'
export default {
  name: 'App',
  data: () => ({


  }),
  components: {
    'appheader': header,
    'appfooter': footer
  }
};

</script>

<style   >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
