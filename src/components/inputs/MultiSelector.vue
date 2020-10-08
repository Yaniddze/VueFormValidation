<template>
  <div class="main">

    <div class="normalizer">
      <div
        class="choose"
        @click="handleChooseChange"
      >
        <div>
          {{ computeTitle }}
        </div>

        <div v-html="arrow">
        </div>

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
        arrow: '&#x2193;',
        selected: [],
      };
    },

    computed: {
      computeTitle() {
        if (this.selected.length > 0) {
          let result = '';

          this.selected.forEach((el) => {
            result += `${el.title}, `;
          });

          return result.slice(0, result.length - 2);
        }

        return this.title;
      },
    },

    methods: {
      handleChooseChange() {
        this.opened = !this.opened;
        this.arrow = this.arrow === '&#x2193;' ? '&#x2191;' : '&#x2193;';
      },
      handleItemChange(item) {
        const actualItem = {
          title: item.title,
          checked: !item.checked,
        };

        this.localItems = this.localItems.map((el) => {
          if (el.title === actualItem.title) {
            return actualItem;
          }

          return el;
        });

        if (actualItem.checked) {
          this.selected.push(actualItem);
        } else {
          this.selected = this.selected.filter((el) => el.title !== actualItem.title);
        }

        this.$emit('change', actualItem);
      },
    },
  };
</script>

<style scoped lang="scss">
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
    display: flex;

    > div:last-child {
      margin-left: auto;
    }
  }

  .normalizer {
    display: flex;
  }

  .item {
    padding: 5px;
    width: 100%;

    background: white;
  }

  .item-holder {
    position: absolute;
    width: 100%;

    animation: HolderIn .2s normal;
  }
</style>
