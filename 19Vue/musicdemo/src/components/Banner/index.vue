<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper, { Autoplay } from "swiper";

export default {
  methods: {
    initBanner() {
      new Swiper(".swiper-container", {
        loop:true,
        autoplay:true
      });
    },
  },
  mounted() {
    this.initBanner();
  },
};
</script>

<style lang="less" scoped>
@import "../../style/index.less";
@import "~swiper/swiper-bundle.css";
.swiper-container{
  background: green;
  .w(375);
  .h(150);
}
</style>