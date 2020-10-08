<template>
  <div>

    <label>

      {{ title }}

      <div>
        <select @change="handleValueChange">
          <option
            v-for="(item) in items"
            :key="item.title"
          >
            {{ item.title }}
          </option>
        </select>
      </div>

    </label>

  </div>
</template>

<script>
  export default {
    name: 'DefaultSelector',

    props: {
      items: {
        type: Array,
      },
      title: {
        type: String,
      },
    },

    methods: {
      handleValueChange(event) {
        this.$emit('change', event.target.value);
      },
    },

    mounted() {
      this.$emit('change', this.items[0].title);
    },
  };
</script>

<style scoped lang="scss">
  select {
    padding: 10px;
    font-size: 16px;
    width: 100%;
    margin-top: 10px;
  }
</style>
