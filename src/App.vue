<template>
  <div id="app">

    <div class="modal">
      <MainForm
        v-if="currentStep === 1"
        :client-group="groups"
        :doctors="doctors"
        @submit="handleMainSubmit"
      />
      <AddressForm
        v-if="currentStep === 2"
        @submit="handleAddressSubmit"
      />
    </div>

  </div>
</template>

<script>
  import AddressForm from './components/forms/AddressForm';
  import MainForm from './components/forms/MainForm';

  import doctorsConfig from './config/doctorsConfig';
  import clientGroups from './config/clientGroups';

  export default {
    name: 'App',
    components: {
      AddressForm,
      MainForm,
    },
    data() {
      return {
        groups: clientGroups,
        doctors: doctorsConfig,
        currentStep: 1,
        currentUser: {
          main: {
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
          address: {
            house: '',
            street: '',
            index: '',
            country: '',
            city: '',
            region: '',
          },
        },
      };
    },

    methods: {
      handleMainSubmit(info) {
        this.currentUser.main = info;
        this.currentStep += 1;
      },

      handleAddressSubmit(info) {
        this.currentUser.address = info;
        this.currentStep += 1;
        console.log(this.currentUser);
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
