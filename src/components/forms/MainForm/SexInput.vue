<template>
  <div>
    Пол:
    <div>

      <label>
        Муж
        <input
          type="checkbox"
          v-model="male"
          @input="changeSex"
        />
      </label>

      <label>
        Жен
        <input
          type="checkbox"
          v-model="female"
          @input="changeSex"
        />
      </label>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'SexInput',
    data() {
      return {
        male: true,
        female: false,
      };
    },
    methods: {
      changeSex() {
        this.male = !this.male;
        this.female = !this.female;

        this.$emit('input', this.male);
      },
    },
  };
</script>

<style scoped>

</style>
