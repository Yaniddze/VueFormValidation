<template>
  <div id="app">
    <MainForm />
  </div>
</template>

<script>
  import MainForm from './components/forms/MainForm';

  export default {
    name: 'App',
    components: {
      MainForm,
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
