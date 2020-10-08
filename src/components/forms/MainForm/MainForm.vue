<template>
  <div>
    <div class="title">
      Основные данные (1/3)
    </div>
    <form>
      <div>
        <div>
          <div v-if="submitted" class="error">
            <div v-if="!$v.surname.required">
              Поле обязательно
            </div>
            <div v-if="!$v.surname.minLength">
              Минимальная длинна: {{ $v.surname.$params.minLength.min }}
            </div>
            <div v-if="!$v.surname.maxLength">
              Максиальная длинна: {{ $v.surname.$params.maxLength.max }}
            </div>
          </div>

          <DefaultInput
            input-name="surname"
            title="Фамилия*"
            @input="handleInputChange"
          />
        </div>

        <div>
          <div v-if="submitted" class="error">
            <div v-if="!$v.name.required">
              Поле обязательно
            </div>
            <div v-if="!$v.name.minLength">
              Минимальная длинна: {{ $v.name.$params.minLength.min }}
            </div>
            <div v-if="!$v.name.maxLength">
              Максиальная длинна: {{ $v.name.$params.maxLength.max }}
            </div>
          </div>

          <DefaultInput
            input-name="name"
            title="Имя*"
            @input="handleInputChange"
          />
        </div>

        <div>
          <div v-if="submitted" class="error">
            <div v-if="!$v.middleName.minLength">
              Минимальная длинна: {{ $v.middleName.$params.minLength.min }}
            </div>
            <div v-if="!$v.middleName.maxLength">
              Максиальная длинна: {{ $v.middleName.$params.maxLength.max }}
            </div>
          </div>

          <DefaultInput
            input-name="middleName"
            title="Отчетсво"
            @input="handleInputChange"
          />
        </div>

        <div>
          <div v-if="submitted" class="error">
            <div v-if="!$v.date.required">
              Поле обязательно
            </div>
          </div>

          <DateTimeInput
            title="Дата рождения*"
            @change="handleDateChange"
          />
        </div>
      </div>

      <div>
        <div>
          <div v-if="submitted" class="error">
            <div v-if="!$v.phone.required">
              Поле обязательно
            </div>
            <div v-if="!$v.phone.phoneCheck">
              Неверный формат
            </div>
          </div>

          <DefaultInput
            input-name="phone"
            title="Телефон*"
            @input="handleInputChange"
          />
        </div>

        <div>
          <SexInput @input="handleSexChange" />
        </div>

        <div>
          <div v-if="submitted" class="error">
            <div v-if="!$v.clientGroups.countCheck">
              Поле обязательно
            </div>
          </div>

          <MultiSelector
            title="Группа клиентов*"
            @change="handleClientChange"
            :items="clientGroup"
          />
        </div>

        <div>
          <DefaultSelector
            @change="handleDoctorChange"
            :items="doctors"
            title="Лечащий врач"
          />
        </div>

        <div>
          <label>
            Не отправлять СМС
            <input
              @click="dontSendSMS = !dontSendSMS"
              v-model="dontSendSMS"
              type="checkbox"
            />
          </label>
        </div>

        <div
          class="right-wrapper btn-wrapper"
        >
          <SquareButton
            title="Далее"
            @click="handleSubmit"
          />
        </div>
      </div>

    </form>
  </div>
</template>

<script>
  import DefaultInput from '../../inputs/DefaultInput.vue';
  import SexInput from './SexInput.vue';
  import DateTimeInput from '../../inputs/DateTimeInput.vue';
  import MultiSelector from '../../inputs/MultiSelector.vue';
  import DefaultSelector from '../../inputs/DefaultSelector.vue';
  import SquareButton from '../../buttons/SquareButton.vue';

  import validators from './validationConfig';

  export default {
    name: 'MainForm',
    components: {
      DefaultInput,
      SexInput,
      MultiSelector,
      DefaultSelector,
      DateTimeInput,
      SquareButton,
    },

    data() {
      return {
        surname: '',
        name: '',
        middleName: '',
        phone: '',
        male: true,
        clientGroups: [],
        doctor: '',
        dontSendSMS: false,
        date: '',
        submitted: false,
      };
    },

    props: {
      clientGroup: {
        type: Array,
      },
      doctors: {
        type: Array,
      },
    },

    validations: {
      ...validators,
    },

    methods: {
      handleInputChange({ name, value }) {
        this[name] = value;
      },

      handleSexChange(male) {
        this.male = male;
      },

      handleClientChange(client) {
        if (!client.checked) {
          this.clientGroups = this.clientGroups.filter((el) => el.title !== client.title);
        } else {
          this.clientGroups.push(client);
        }
      },

      handleDoctorChange(title) {
        this.doctor = title;
      },

      handleDateChange(date) {
        this.date = date;
      },

      handleSubmit(event) {
        event.preventDefault();

        if (!this.$v.$invalid) {
          this.$emit('submit', {
            surname: this.surname,
            name: this.name,
            middleName: this.middleName,
            phone: this.phone,
            male: this.male,
            clientGroups: this.clientGroups,
            doctor: this.doctor,
            dontSendSMS: this.dontSendSMS,
            birthDate: this.date,
          });
        } else {
          this.submitted = true;
        }
      },
    },

  };
</script>

<style scoped lang="scss">
  form > div > div {
    padding: 10px 0;
  }

  .error {
    color: red;
  }

  .right-wrapper {
    display: flex;

    > * {
      margin-left: auto;
    }
  }

  .btn-wrapper {
    margin-right: 10px;
  }

  .title {
    font-size: 46px;
    font-weight: bold;
  }

  @media(min-width: 900px) {
    form {
      display: flex;

      > div:last-child {
        margin-left: 20px;
      }
    }
  }
</style>
