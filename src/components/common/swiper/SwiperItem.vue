<template>
  <!-- 每一张的轮播图 -->
  <div class="swiper-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SwiperItem'
}
</script>

<style>
  .swiper-item {
    width: 100%;
    /* flex-shrink: 0; */
    height: 100%;
  }

  .swiper-item img {
    widows: 100%;
    height: 203px;
    /* padding: -10px; */
  }
</style>