<template>
  <div>
    <div class="title">
      Паспорт (3/3)
    </div>
    <form>

      <div>
        <div>
          <DefaultSelector
            title="Тип документа*"
            :items="documentTypes"
            @change="handleTypeChange"
          />
        </div>

        <div>
          <div v-if="submitted" class="error">
            <div v-if="!$v.serial.formatCheck">
              Неверный формат
            </div>
          </div>

          <DefaultInput
            title="Серия"
            input-name="serial"
            @input="handleInputChange"
          />
        </div>

        <div>
          <div v-if="submitted" class="error">
            <div v-if="!$v.number.formatCheck">
              Неверный формат
            </div>
          </div>

          <DefaultInput
            title="Номер"
            input-name="number"
            @input="handleInputChange"
          />
        </div>

      </div>

      <div>

        <div>
          <div v-if="submitted" class="error">
            <div v-if="!$v.issued.minLength">
              Минимальная длина {{ $v.issued.$params.minLength.min }}
            </div>
            <div v-if="!$v.issued.maxLength">
              Максимальная длина {{ $v.issued.$params.maxLength.max }}
            </div>
          </div>

          <DefaultInput
            title="Номер"
            input-name="number"
            @input="handleInputChange"
          />
        </div>

        <div>
          <div v-if="submitted" class="error">
            <div v-if="!$v.issueDate.required">
              Поле обязательно
            </div>
          </div>

          <DateTimeInput
            title="Дата выдачи"
            @change="handleDateChange"
          />
        </div>

        <div class="right-wrapper btn-wrapper">
          <SquareButton @click="handleSubmit" title="Завершить" />
        </div>

      </div>

    </form>
  </div>
</template>

<script>
  import DefaultSelector from '../../inputs/DefaultSelector.vue';
  import DefaultInput from '../../inputs/DefaultInput.vue';
  import DateTimeInput from '../../inputs/DateTimeInput.vue';
  import SquareButton from '../../buttons/SquareButton.vue';

  import validationConfig from './validationConfig';

  export default {
    name: 'PassportForm',

    props: {
      documentTypes: {
        type: Array,
      },
    },

    validations: {
      ...validationConfig,
    },

    components: {
      DefaultSelector,
      DefaultInput,
      DateTimeInput,
      SquareButton,
    },

    data() {
      return {
        submitted: false,
        documentType: '',
        serial: '',
        number: '',
        issued: '',
        issueDate: '',
      };
    },

    methods: {
      handleTypeChange(type) {
        this.documentType = type;
      },

      handleInputChange({ name, value }) {
        this[name] = value;
      },

      handleDateChange(value) {
        this.issueDate = value;
      },

      handleSubmit(event) {
        event.preventDefault();

        if (!this.$v.$invalid) {
          this.$emit('submit', {
            documentType: this.documentType,
            serial: this.serial,
            number: this.number,
            issued: this.issued,
            issueDate: this.issueDate,
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

  .title {
    font-size: 46px;
    font-weight: bold;
  }

  .error {
    color: red;
  }

  .right-wrapper {
    display: flex;

    > * {
      margin-top: 10px;
      margin-left: auto;
    }
  }

  .btn-wrapper {
    margin-right: 10px;
  }

  @media (min-width: 900px) {
    form {
      display: flex;

      > div:last-child {
        margin-left: auto;
      }
    }
  }
</style>
