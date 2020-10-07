import { required, minLength, maxLength } from 'vuelidate/src/validators';

export default {
  surname: {
    required,
    minLength: minLength(3),
    maxLength: maxLength(30),
  },
  name: {
    required,
    minLength: minLength(2),
    maxLength: maxLength(30),
  },
  middleName: {
    minLength: minLength(3),
    maxLength: maxLength(30),
  },
  phone: {
    required,
    phoneCheck: (phone) => (
      /^7\d\d\d\d\d\d\d\d\d\d/.test(phone)
    ),
  },
};
