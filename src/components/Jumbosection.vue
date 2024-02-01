<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
  import { EffectFade, Navigation, Pagination } from 'swiper/modules';
export default {
    data() {
        return {

        };
    },
    methods: {
        
    setup() {
      return {
        modules: [EffectFade, Navigation, Pagination],
      };
    },
    },
    components:{
        Swiper,
        SwiperSlide,
    }
}
</script>

<template>

    
  <swiper
    :spaceBetween="30"
    :effect="'fade'"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
        <img
        src="../../public/instrumental-rock/image.png" />
    </swiper-slide>
    <swiper-slide>
        <img
        src="../../public/instrumental-rock/image (1).png" />
        </swiper-slide>
   
  </swiper>
</template>
                               
                               

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
.mySwiper{
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>
