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
      <PassportForm
        v-if="currentStep === 3"
        :document-types="documents"
        @submit="handlePassportSubmit"
      />
    </div>

  </div>
</template>

<script>
  import AddressForm from './components/forms/AddressForm';
  import MainForm from './components/forms/MainForm';
  import PassportForm from './components/forms/PassportForm';

  import doctorsConfig from './config/doctorsConfig';
  import clientGroups from './config/clientGroups';
  import documentTypes from './config/documentTypes';

  export default {
    name: 'App',
    components: {
      AddressForm,
      MainForm,
      PassportForm,
    },
    data() {
      return {
        groups: clientGroups,
        doctors: doctorsConfig,
        documents: documentTypes,
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
          passport: {
            documentType: '',
            serial: '',
            number: '',
            issued: '',
            issueDate: '',
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
      },

      handlePassportSubmit(info) {
        this.currentUser.passport = info;

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
