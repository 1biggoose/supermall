<template>
  <!-- 所有的item都展示一张图片， 同一个文字 -->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'deepPink'
    }
  },
  data() {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
      // console.log('111');
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
      // console.log('222');
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
      // console.log('333');
    }
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
</style>