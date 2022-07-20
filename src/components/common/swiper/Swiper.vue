<template>
  <!-- 整套的轮播图 -->
  <div class="swiper">
    <div class="image">
      <slot></slot>
    </div>

    <div class="bar">
      <span v-for="(item, index) in banners" 
        :key="index" 
        :class="{ 'activetop': index === mark }">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    mark: {
      type: Number,
      default: null
    },
    banners: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
  .swiper {
    margin-top: 40px;
    height: 200px;
  }

  .bar {
    position: relative;
    left: 42%;
    /* transform: translateX(-50%); */
    bottom: 25px;
    width: 65px;
    padding-left: 3px;
    padding-top: 3px;

    /* background-color: rgba(255, 255, 255, .3); */
    /* border-radius: 25px; */

  }

  .bar span {
    display: inline-block;
    
    width: 12px;
    height: 12px;
    margin-right: 3px;

    border-radius: 25px;
    
    cursor: pointer;
    background-color: #fff;
  }

  .activetop {
    background-color: var(--color-high-text) !important;
  }
</style>