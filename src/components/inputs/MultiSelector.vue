<template>
  <div>

    <div
      class="choose"
      @click="handleChooseChange"
    >
      Выбери меня
    </div>

    <div v-if="opened">
      <div
        v-for="(item) in items"
        :key="item.title"
        :value="item.title"
        class="item"
      >

        <label>
          <input
            @click="item.checked = !item.checked"
            :v-model="item.checked"
            :checked="item.checked"
            type="checkbox"/>
          {{ item.title }}
        </label>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'MultiSelector',

    props: {
      items: {
        type: Array,
      },
    },

    data() {
      return {
        selected: [],
        opened: false,
      };
    },

    methods: {
      handleChooseChange() {
        this.opened = !this.opened;
      },
    },
  };
</script>

<style scoped>
  .choose {
    border: 1px solid black;
    padding: 5px;
    width: auto;
  }

  .item {
    border: 1px solid black;
    padding: 5px;
    margin: 1px;
  }
</style>
