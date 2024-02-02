<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
export default {
  data() {
    return {
      
      carouselCards: [
        {
          img: "../../public/instrumental-rock/assets/hip_hop_wired_to_dance_make.jpg",
          title: "hip hop wired to dance make",
          date: "06 November 2021",
          text: "Driving short distances music is a music genre that includes traditional folk music and the contemporary genre that evolved from the former",
        },
        {
          img: "public/instrumental-rock/assets/music_business-worldwide.jpg",
          title: "music buisness worldwide",
          date: "27 May 2022",
          text: "Driving short distances music is a music genre that includes traditional folk music and the contemporary genre that evolved from the former",
        },
        {
          img: "public/instrumental-rock/assets/giveaways_rock.jpg",
          title: "giveaways rock to all",
          date: "07 May 2022",
          text: "Driving short distances music is a music genre that includes traditional folk music and the contemporary genre that evolved from the former",
        },
        {
          img: "public/instrumental-rock/assets/drowned_in_sound_feel_joy.jpg",
          title: "drowned in sound fell joy",
          date: "10 April 2022",
          text: "Driving short distances music is a music genre that includes traditional folk music and the contemporary genre that evolved from the former",
        },
        {
          img: "public/instrumental-rock/assets/dancing_astronaut_bounce_ipsum.jpg",
          title: "dancing in astrounaut bounce",
          date: "01 March 2022",
          text: "Driving short distances music is a music genre that includes traditional folk music and the contemporary genre that evolved from the former",
        },
        {
          img: "public/instrumental-rock/assets/consequence_of_sound_make_us.jpg",
          title: "consequense of sound make us",
          date: "14 February",
          text: "Driving short distances music is a music genre that includes traditional folk music and the contemporary genre that evolved from the former",
        },
      ],
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
  <div class="carousel-container">
    <ul>
      <li>music blog</li>
      <li>best music blog</li>
    </ul>
    <div class="carousel">
      <button class="prev">
       <i class="fa-solid fa-chevron-left"></i>
      </button>
      <swiper
        ref="{swiperRef}"
        :slidesPerView="3"
        :spaceBetween="30"
        :navigation="{
              prevEl: '.prev',
              nextEl: '.next',
            }"
        :modules="modules"
        class="mySwiper "
        
        >
        <swiper-slide v-for="(elem , i) in carouselCards">
          <div class="carousel-card">
            <div class="img-box">
              <img :src="carouselCards[i].img" alt="" />
            </div>
            <h4 class="my-2 text-uppercase">{{ carouselCards[i].title }}</h4>
            <p class="my-2"><i class="fa-regular fa-calendar-days me-1"></i>{{ carouselCards[i].date }}</p>
            <p class="my-2">{{ carouselCards[i].text }}</p>
          </div>
        </swiper-slide>
      </swiper>
      <button class="next">
         <i class="fa-solid fa-chevron-right"></i>
      </button> 
    </div> 
  </div>
      
        

</template>

<style lang="scss" scoped>

@use "../assets/scss/main.scss" as *;
@import "../assets/scss/partials/variables.scss";
.mySwiper{
  width: 1300px;
  margin: 0 auto;
}
.carousel-container {
  ul {
    text-align: center;
    color: white;
    margin-top: 80px;
    & :nth-child(1) {
      font-size: 1.3rem;
      text-transform: uppercase;
      color: $orange-color;
    }
    & :nth-child(2) {
      font-size: 4rem;
      text-transform: uppercase;
    }
  }
  .carousel {
    width: 1400px;
    margin: 0 auto;
    color: white;
    display: flex;
    justify-content: center;
    button {
      height: 30px;
      width: 30px;
      align-self: center;
      border: none;
      display: none;
      background-color: transparent;
      i {
        font-size: 40px;
        color: darkgray;
      }
    }
    .carousel-card {
      width: 400px;
      height: 500px;
      margin: 0px 40px;
      .img-box {
        width: 400px;
        height: 300px;
        overflow: hidden;
        object-fit: contain;
        img {
          height: 100%;
          width: 100%;
          &:hover {
            transform: scale(1.05);
            transition: ease-in;
            transition-duration: 300ms;
          }
        }
      }
      & :nth-child(3) {
        color: $orange-color;
        font-size: 16px;
      }
      & :nth-child(4) {
        color: darkgray;
        font-size: 1.2rem;
      }
    }
  }
  &:hover button {
    display: block;
    opacity: 0;
    animation-name: appear;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
    transition-timing-function: ease-in-out;
  }
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
</style>
