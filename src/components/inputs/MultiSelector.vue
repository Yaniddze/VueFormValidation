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
        v-for="(item) in localItems"
        :key="item.title"
        :value="item.title"
        class="item"
      >

        <label>
          <input
            @click="handleItemChange(item)"
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
        opened: false,
        localItems: this.items.map((el) => ({ ...el, checked: false })),
      };
    },

    watch: {
      someWatch() {
        console.log(this.localItems);
      },
    },

    methods: {
      handleChooseChange() {
        this.opened = !this.opened;
      },
      handleItemChange(item) {
        this.localItems = this.localItems.map((el) => {
          if (el.title === item.title) {
            return {
              title: item.title,
              checked: !item.checked,
            };
          }

          return el;
        });

        this.$emit('change', {
          title: item.title,
          checked: !item.checked,
        });
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
