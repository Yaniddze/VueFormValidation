<template>
  <div>
    <label>
      <div>
        {{ title }}
      </div>
      <div class="wrapper">
        <input
          @change="$emit('change', $event.target.value)"
          type="date"
        />
      </div>
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
  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;

    margin-top: 10px;
  }

  label {
    width: 100%;
  }

  .wrapper {
    display: flex;
  }
</style>
