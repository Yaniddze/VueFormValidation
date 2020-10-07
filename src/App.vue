<template>
  <div id="app">
    <div class="modal">
      <MainForm
        :client-group="groups"
        :doctors="doctors"
      />
    </div>

  </div>
</template>

<script>
  import MainForm from './components/forms/MainForm';

  import doctorsConfig from './config/doctorsConfig';
  import clientGroups from './config/clientGroups';

  export default {
    name: 'App',
    components: {
      MainForm,
    },
    data() {
      return {
        groups: clientGroups,
        doctors: doctorsConfig,
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

  .modal {
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 10px;

    padding: 10px;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
</style>
