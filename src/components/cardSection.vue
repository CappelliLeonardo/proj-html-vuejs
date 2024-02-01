<script>
export default {
  data() {
    return {
      cards: [
        {
          img: "/instrumental-rock/assets/gallery1.jpg",
          title: 'A ROLL AND BANG THE FLOOR'
        },
         {
          img: "/instrumental-rock/assets/gallery2.jpg",
          title: 'YOUR MELODY TO OUR MUSIC'
        },
         {
          img: "/instrumental-rock/assets/gallery3.jpg",
          title: 'TOUCHING HEAVEN ON FREQUENCY'
        },
         {
          img: "/instrumental-rock/assets/gallery4.jpg",
          title: 'MUSIC MAKES STRONGE BEATS'
        },
         {
          img: "/instrumental-rock/assets/gallery5.jpg",
          title: 'SOUND IS THE SPARK OF TIME'
        },
         {
          img: "/instrumental-rock/assets/gallery6.jpg",
          title: 'MAKE YOUR NIGHT GROOVY'
        }
      ]
    };
  },
  methods: {},
};
</script>

<template>
    <div class="container-fluid card-section">
        <p id="title-1">who we are</p>
        <p id="title-2">sense the jazz</p>
        <div class="card-container d-flex justify-content-between  ">
            <div v-for="(elem,i) in cards" :key="i"  class="card text-center ">
                <div class="img-box">
                    <img :src="elem.img" alt="">
                </div>
                <div class="title-box mt-1">
                    <h3>{{ elem.title }}</h3>
                </div>
                <div class="icons-box">
                    Stream on :
                    <i class="fa-brands fa-spotify me-2"></i>
                    <i class="fa-brands fa-youtube me-2"></i>
                    <i class="fa-solid fa-music me-2"></i>
                    <i class="fa-brands fa-soundcloud me-2"></i>
                    <i class="fa-solid fa-compass me-2"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
@import "../assets/scss/partials/variables.scss";
.card-section{
    height: 1400px;
    background-color: black;
    text-align: center;
    color: white;
    padding-top: 150px;
    #title-1{
        font-size: 1.2rem;
        text-transform: uppercase;
        color: $orange-color;
    }
    #title-2{
        font-size: 4rem;
        text-transform: uppercase;
    }
    .card-container{
        width: 1400px;
        min-height: 80%;
        margin: auto;
        flex-wrap: wrap;
        .card{
            width: calc((100% / 3) - 20px);
            height: 470px;
            color: white;
            border: none;
            background-color: black;
           
            h3{
                font-size: 1.5rem;
            }
            .img-box{
                height: 100%;
                 overflow:hidden;
                img{
                height: 100%;
                width: 100%;
                &:hover{
                    transform: scale(1.05);
                    transition: ease-in;
                    transition-duration: 300ms;
                }
            }
            }
        }
    }
  .icons-box >*:hover{
    color: $orange-color;
  }
}
</style>
