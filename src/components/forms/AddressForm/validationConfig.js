import { required, minLength, maxLength } from 'vuelidate/src/validators';

export default {
  index: {
    formatCheck: (val) => (
      /^\d{6}$/.test(val) || val === ''
    ),
  },
  country: {
    minLength: minLength(3),
    maxLength: maxLength(30),
  },
  region: {
    minLength: minLength(3),
    maxLength: maxLength(30),
  },
  city: {
    required,
    minLength: minLength(3),
    maxLength: maxLength(30),
  },
  street: {
    minLength: minLength(3),
    maxLength: maxLength(30),
  },
  house: {
    maxLength: maxLength(10),
  },
};
