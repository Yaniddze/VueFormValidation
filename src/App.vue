<template>
  <div id="app">
    <MainForm :client-group="groups" />
  </div>
</template>

<script>
  import MainForm from './components/forms/MainForm';
  import clientGroups from './config/clientGroups';

  export default {
    name: 'App',
    components: {
      MainForm,
    },
    data() {
      return {
        groups: clientGroups,
      };
    },
  };
</script>

<style lang="scss">
  body, html {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #app {
    background: #E8F5E9;
    height: 100%;
  }
</style>
