<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
export default {
  data() {
    return {
      imageSlide:[
        {
          img:'/instrumental-rock/assets/instagram_img1.jpg'
        },
        {
          img:'/instrumental-rock/assets/instagram_img2.jpg'
        },
        {
          img:'/instrumental-rock/assets/instagram_img3.jpg'
        },
        {
          img:'/instrumental-rock/assets/instagram_img4.jpg'
        },
        {
          img:'/instrumental-rock/assets/instagram_img5.jpg'
        },
        {
          img:'/instrumental-rock/assets/instagram_img6.jpg'
        },
        {
          img:'/instrumental-rock/assets/instagram_img7.jpg'
        },
        {
          img:'/instrumental-rock/assets/instagram_img8.jpg'
        },
        {
          img:'/instrumental-rock/assets/instagram_img9.jpg'
        },
        {
          img:'/instrumental-rock/assets/instagram_img10.jpg'
        }
      ]
    };
  },
  methods: {
     setup() {
      return {
        modules: [Pagination, Navigation],
      };
    },
  },
  components: {
      Swiper,
      SwiperSlide,
  },
};
</script>

<template>
    <swiper
    :spaceBetween="30"
    :slidesPerView="8"
    :loop="true"
    :autoplay="{
      delay: 3500,
    }"
    :modules="modules"
    class="mySwiper"
    >
    
    
    <swiper-slide v-for="(elem , i) in imageSlide">
      <div class="img-box">
        <img :src="elem.img" alt="">
      </div>
    </swiper-slide>
    
  </swiper>
</template>

<style lang="scss" scoped>

@use "../assets/scss/main.scss" as *;
@import "../assets/scss/partials/variables.scss";
.mySwiper{
  height: 250px;
  background-color: black;
  .img-box{
        height: 100%;
        width: 85%;
        overflow:hidden;
        object-fit: cover;
        img{
        height: 100%;
        width: 100%;
        transition: 0.5s transform  ease-in-out;
        &:hover{
            transform: scale(1.08);
          }
        }
    }
  }
            


</style>
