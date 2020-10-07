<template>
  <div>
    <label>
      {{ title }}
      <input
        @change="$emit('change', $event.target.value)"
        type="date"
      />
    </label>
  </div>
</template>

<script>
  export default {
    name: 'DateTimeInput',
    props: {
      title: {
        type: String,
      },
    },
  };
</script>

<style scoped>

</style>
