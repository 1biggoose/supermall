<template>
  <!-- 整套的轮播图 -->
  <div class="swiper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper'
}
</script>

<style>
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper img {
    width: 100%;
    height: 190px;
  }
</style>