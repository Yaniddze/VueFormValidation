<template>
  <div>
    <div class="title">
      Адрес (2/3)
    </div>
    <form>

      <div>

        <div>
          <div v-if="submitted" class="error">
            <div v-if="!$v.index.formatCheck">
              Неверный формат
            </div>
          </div>
          <DefaultInput
            input-name="index"
            title="Индекс"
            @input="handleInputChange"
          />
        </div>

        <div>
          <div v-if="submitted" class="error">
            <div v-if="!$v.country.minLength">
              Минимальная длина: {{ $v.country.$params.minLength.min }}
            </div>
            <div v-if="!$v.country.maxLength">
              Максимальная длина: {{ $v.country.$params.maxLength.max }}
            </div>
          </div>
          <DefaultInput
            input-name="country"
            title="Страна"
            @input="handleInputChange"
          />
        </div>

        <div>
          <div v-if="submitted" class="error">
            <div v-if="!$v.region.minLength">
              Минимальная длина: {{ $v.region.$params.minLength.min }}
            </div>
            <div v-if="!$v.region.maxLength">
              Максимальная длина: {{ $v.region.$params.maxLength.max }}
            </div>
          </div>
          <DefaultInput
            input-name="region"
            title="Область"
            @input="handleInputChange"
          />
        </div>

      </div>

      <div>

        <div>
          <div v-if="submitted" class="error">
            <div v-if="!$v.city.required">
              Поле обязательно
            </div>
            <div v-if="!$v.city.minLength">
              Минимальная длина: {{ $v.city.$params.minLength.min }}
            </div>
            <div v-if="!$v.city.maxLength">
              Максимальная длина: {{ $v.city.$params.maxLength.max }}
            </div>
          </div>
          <DefaultInput
            input-name="city"
            title="Город*"
            @input="handleInputChange"
          />
        </div>

        <div>
          <div v-if="submitted" class="error">
            <div v-if="!$v.street.minLength">
              Минимальная длина: {{ $v.street.$params.minLength.min }}
            </div>
            <div v-if="!$v.street.maxLength">
              Максимальная длина: {{ $v.street.$params.maxLength.max }}
            </div>
          </div>
          <DefaultInput
            input-name="street"
            title="Улица"
            @input="handleInputChange"
          />
        </div>

        <div>
          <div v-if="submitted" class="error">
            <div v-if="!$v.house.maxLength">
              Максимальная длина: {{ $v.house.$params.maxLength.max }}
            </div>
          </div>
          <DefaultInput
            input-name="house"
            title="Дом"
            @input="handleInputChange"
          />
        </div>

        <div class="btn-wrapper right-wrapper">
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
  import validationConfig from './validationConfig';
  import DefaultInput from '../../inputs/DefaultInput.vue';
  import SquareButton from '../../buttons/SquareButton.vue';

  export default {
    name: 'AddressForm',

    data() {
      return {
        index: '',
        city: '',
        region: '',
        country: '',
        street: '',
        house: '',
        submitted: false,
      };
    },

    components: {
      DefaultInput,
      SquareButton,
    },

    validations: {
      ...validationConfig,
    },

    methods: {
      handleInputChange({ name, value }) {
        this[name] = value;
      },
      handleSubmit(event) {
        event.preventDefault();

        if (!this.$v.$invalid) {
          this.$emit('submit', {
            index: this.index,
            city: this.city,
            region: this.region,
            country: this.country,
            street: this.street,
            house: this.house,
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

  @media (min-width: 900px) {
    form {
      display: flex;

      > div:last-child {
        margin-left: auto;
      }
    }
  }
</style>
