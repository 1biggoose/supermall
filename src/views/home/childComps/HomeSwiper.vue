<template>
  <div class="HomeSwiper">
    <swiper :banners="banners" :mark="mark">
      <swiper-item v-for="(item, index) in banners" :key="index" v-show="index === mark">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperItem } from 'components/common/swiper'

  export default {
    name: 'HomeSwiper',
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        // banners: [],
        // recommends: [],
        mark: 0
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    created() {
      this.play()
    },
    methods: {
      autoPlay() {
        this.mark++
        if (this.mark === 4) {
          this.mark = 0
        }
      },
      play() {
        this.timer = setInterval(this.autoPlay, 1500)
      }
    }
  }
</script>

<style>

</style>