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
    :navigation="{
              prevEl: '.prev',
              nextEl: '.next',
            }"
    :loop="true"
    :autoplay="{
      delay: 3500,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
  <button class="prev">
    <i class="fa-solid fa-chevron-left"></i>
  </button>
    <swiper-slide>
        <img src="../../public/instrumental-rock/image.png" />
        
        <div class="text-area">
            <p>INSTRUMENTAL ROCK</p>
            <h1>music of the spirit</h1>
            <button class="button">
                <a href="#">
                    read more
                </a>
            </button>
        </div>
    </swiper-slide>
    <swiper-slide>
        <img src="../../public/instrumental-rock/image (1).png" />
        <div class="text-area">
            <p>INSTRUMENTAL ROCK</p>
            <h1>music in this video</h1>
            <button class="button">
                <a href="#">
                    read more
                </a>
            </button>
        </div>
    </swiper-slide>
   <button class="next">
    <i class="fa-solid fa-chevron-right"></i>
   </button>
  </swiper>
</template>
                               
                               

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
@import "../src/assets/scss/partials/variables.scss";
.mySwiper{
    width: 100%;
    height: 100%;
    .prev{
        width: 50px;
        height: 50px;
        position: absolute;
        border: none;
        top:50%;
        left: 3%;
        z-index: 2;
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        &:hover{
          background-color: black;
        }
    }
    
    .next{
        width: 50px;
        height: 50px;
        position: absolute;
        border: none;
        top:50%;
        right: 3%;
        z-index: 2;
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        &:hover{
          background-color: black;
        }
    }
    img{
        width: 100%;
        height: 100%;
    }
    .text-area{
        position: absolute;
        z-index: 2;
        color: white;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        &> :first-child{
            color: $orange-color;
            font-size: 2rem;
            transition: 0.5s opacity scale ease-in;
        }
        &> :nth-child(2){
           color: white;
           font-size: 6.5rem;
            text-transform: uppercase;
            transition: 0.5s opacity scale ease-in;
            margin-top: 20px;
            margin-bottom: 50px;
        }
        

        }
        .button{
                width: 200px;
                height: 50px;
                background-color: transparent;
                border: 1px solid $orange-color;
                transition: 0.5s background-color ease-in-out;
                 a{
                    color: white;
                    text-decoration: none;
                    font-size: 1.2rem;
                    text-transform: uppercase;
                    margin: auto;
                    }
                    &:hover{
                        background-color: $orange-color;
                    }
               }
    &:hover .prev,&:hover .next {
    display: block;
    opacity: 0;
    animation-name: appear;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
    transition-timing-function: ease-in-out;
  }

@keyframes appear {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}
}

            
</style>
