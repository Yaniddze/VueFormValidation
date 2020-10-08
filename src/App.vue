<template>
  <div id="app">

    <div class="modal">
      <MainForm
        :client-group="groups"
        :doctors="doctors"
        @submit="handleFirstSubmit"
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
        currentUser: {
          surname: '',
          name: '',
          middleName: '',
          phone: '',
          male: true,
          clientGroups: [],
          doctor: '',
          dontSendSMS: false,
          date: '',
        },
      };
    },

    methods: {
      handleFirstSubmit(info) {
        this.currentUser = info;
      },
    },
  };
</script>

<style lang="scss">
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
    background: #E8F5E9;
  }

  .modal {
    margin: 0 10px;
  }

  @media(min-width: 600px) {
    .modal {
      position: absolute;
      width: 500px;
      margin: 30px 0;

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      border-radius: 10px;

      padding: 10px;
      box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    }
  }

</style>
