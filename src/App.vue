<template>
  <div id="app">

    <div v-if="showAlert">
      <AlertMessage
        @click="handleAlertSubmit"
        message="Пользователь создан"
      />
    </div>

    <div :class="currentStep === 1 ? 'show' : 'hide'">
      <MainForm
        :client-group="groups"
        :doctors="doctors"
        @submit="handleMainSubmit"
      />
    </div>

    <div :class="currentStep === 2 ? 'show' : 'hide'">
      <AddressForm
        @submit="handleAddressSubmit"
      />
    </div>

    <div :class="currentStep === 3 ? 'show' : 'hide'">
      <PassportForm
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

  import AlertMessage from './components/AlertMessage.vue';

  import doctorsConfig from './config/doctorsConfig';
  import clientGroups from './config/clientGroups';
  import documentTypes from './config/documentTypes';

  export default {
    name: 'App',
    components: {
      AddressForm,
      MainForm,
      PassportForm,
      AlertMessage,
    },
    data() {
      return {
        groups: clientGroups,
        doctors: doctorsConfig,
        documents: documentTypes,
        showAlert: false,
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

        this.showAlert = true;
      },

      handleAlertSubmit() {
        this.showAlert = false;
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

  @keyframes Show {
    0% {
      display: none;
      transform: translate(-1000%, 150%);
    }

    80% {
      display: block;
      transform: translate(-50%, -55%);
    }

    100% {
      transform: translate(-50%, -50%);
    }
  }

  .hide {
    display: none;
  }

  .show {
    margin: 0 10px;
  }

  @media(min-width: 600px) {
    .show {
      position: absolute;
      width: 500px;
      margin: 30px 0;

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      border-radius: 10px;

      padding: 10px;
      box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

      animation: .5s Show normal;
    }
  }

</style>
