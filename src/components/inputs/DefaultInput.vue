<template>
  <div>
    <label>
      <div>
        {{ title }}
      </div>
      <div class="wrapper">
        <input :name="inputName" class="input" @input="handleInput" />
      </div>
    </label>
  </div>
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
    width: 100%;
    font-size: 16px;
    margin-top: 10px;
  }

  .wrapper {
    display: flex;
    width: 100%;
  }

  label {
    width: 100%;
  }
</style>
