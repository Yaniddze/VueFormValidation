import { required, minLength, maxLength } from 'vuelidate/src/validators';

export default {
  serial: {
    formatCheck: (val) => (
      /^\d{4}$/.test(val) || val === ''
    ),
  },
  number: {
    formatCheck: (val) => (
      /^\d{6}$/.test(val) || val === ''
    ),
  },
  issued: {
    minLength: minLength(3),
    maxLength: maxLength(30),
  },
  issueDate: {
    required,
  },
};
