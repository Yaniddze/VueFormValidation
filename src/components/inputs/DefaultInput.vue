<template>
  <label>
    <div>
      {{ title }}
    </div>
    <input class="input" @input="handleInput" />
  </label>
</template>

<script>
export default {
  name: 'DefaultInput',
  props: {
    title: {
      type: String,
    },
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event);
    },
  },
};
</script>

<style scoped lang="scss">
  .input {
    padding: 10px;
  }
</style>
