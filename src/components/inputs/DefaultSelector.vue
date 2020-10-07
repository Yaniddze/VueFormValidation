<template>
  <div>
    <label>
      {{ title }}
      <select>
        <option
          v-for="(item) in items"
          :key="item.title"
        >
          {{ item.title }}
        </option>
      </select>

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
  };
</script>

<style scoped>

</style>
