<template>
  <div class="main">

    <div class="normalizer">
      <div
        class="choose"
        @click="handleChooseChange"
      >
        {{ title }}
      </div>
    </div>

    <div v-if="opened" class="item-holder">

      <div
        class="normalizer"
        v-for="(item) in localItems"
        :key="item.title"
      >
        <div
          :value="item.title"
          class="item"
        >

          <label>
            <input
              @click="handleItemChange(item)"
              :checked="item.checked"
              type="checkbox"/>
            {{ item.title }}
          </label>

        </div>
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
      title: {
        type: String,
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
  @keyframes HolderIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .main {
    width: 100%;
    position: relative;
  }

  .choose {
    border: 1px solid black;
    padding: 5px;
    width: 100%;
    background: white;
  }

  .normalizer {
    display: flex;
  }

  .item {
    border: 1px solid black;
    padding: 5px;
    margin: 1px;
    width: 100%;

    background: white;
  }

  .item-holder {
    position: absolute;
    width: 100%;

    animation: HolderIn .2s normal;
  }
</style>
