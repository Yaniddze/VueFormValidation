<template>
  <label>
    <div>
      {{ title }}
    </div>
    <input :name="inputName" class="input" @input="handleInput" />
  </label>
</template>

<script>
  export default {
    name: 'DefaultInput',
    props: {
      title: {
        type: String,
      },
      inputName: {
        type: String,
      },
    },
    methods: {
      handleInput(event) {
        this.$emit('input', {
          name: event.target.name,
          value: event.target.value,
        });
      },
    },
  };
</script>

<style scoped lang="scss">
  .input {
    padding: 10px;
  }
</style>
