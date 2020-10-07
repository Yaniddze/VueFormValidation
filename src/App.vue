<template>
  <div id="app">
    {{ name }}
    <DefaultInput
      title="Label"
      @input="setName"
    />
  </div>
</template>

<script>
import DefaultInput from './components/inputs/DefaultInput.vue';

export default {
  name: 'App',
  components: {
    DefaultInput,
  },
  data() {
    return {
      name: '11',
    };
  },
  methods: {
    setName(event) {
      console.log(this);
      this.name = event.target.value;
    },
  },
};
</script>

<style lang="scss">
  body, html {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #app {
    background: #E8F5E9;
    height: 100%;
  }
</style>
