<template>
  <form>
    <div v-if="!$v.surname.required">
      Поле обязательно
    </div>
    <div v-if="!$v.surname.minLength">
      Минимальная длинна: {{ $v.surname.$params.minLength.min }}
    </div>
    <div v-if="!$v.surname.maxLength">
      Минимальная длинна: {{ $v.surname.$params.maxLength.max }}
    </div>
    <DefaultInput
      input-name="surname"
      title="Фамилия"
      @input="handleInputChange"
    />

    <div v-if="!$v.name.required">
      Поле обязательно
    </div>
    <div v-if="!$v.name.minLength">
      Минимальная длинна: {{ $v.name.$params.minLength.min }}
    </div>
    <div v-if="!$v.name.maxLength">
      Минимальная длинна: {{ $v.name.$params.maxLength.max }}
    </div>
    <DefaultInput
      input-name="name"
      title="Имя"
      @input="handleInputChange"
    />

    <div v-if="!$v.middleName.minLength">
      Минимальная длинна: {{ $v.middleName.$params.minLength.min }}
    </div>
    <div v-if="!$v.middleName.maxLength">
      Минимальная длинна: {{ $v.middleName.$params.maxLength.max }}
    </div>
    <DefaultInput
      input-name="middleName"
      title="Отчетсво"
      @input="handleInputChange"
    />

    <div v-if="!$v.phone.required">
      Поле обязательно
    </div>
    <div v-if="!$v.phone.phoneCheck">
      Неверный формат
    </div>
    <DefaultInput
      input-name="phone"
      title="Телефон"
      @input="handleInputChange"
    />
    <SexInput @input="handleSexChange" />
  </form>
</template>

<script>
  import DefaultInput from '../../inputs/DefaultInput.vue';
  import SexInput from './SexInput.vue';

  import validators from './validatorConfig';

  export default {
    name: 'MainForm',
    components: {
      DefaultInput,
      SexInput,
    },
    data() {
      return {
        surname: '',
        name: '',
        middleName: '',
        phone: '',
        male: true,
      };
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
    },
  };
</script>

<style scoped>

</style>
