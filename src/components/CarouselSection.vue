<script>

export default {
    data() {
        return {
          counter:null,
          carouselCards:[
            {
              img:'../../public/instrumental-rock/assets/hip_hop_wired_to_dance_make.jpg',
              title: 'hip hop wired to dance make',
              date: '06 november 2021',
              text: 'Driving short distances music is a music genre that includes traditional folk music and the contemporary genre that evolved from the former'
            },
            {
              img:'../../public/instrumental-rock/assets/hip_hop_wired_to_dance_make.jpg',
              title: 'hip hop wired to dance make',
              date: '06 november 2021',
              text: 'Driving short distances music is a music genre that includes traditional folk music and the contemporary genre that evolved from the former'
            },
            {
              img:'../../public/instrumental-rock/assets/hip_hop_wired_to_dance_make.jpg',
              title: 'hip hop wired to dance make',
              date: '06 november 2021',
              text: 'Driving short distances music is a music genre that includes traditional folk music and the contemporary genre that evolved from the former'
            },
            {
              img:'../../public/instrumental-rock/assets/hip_hop_wired_to_dance_make.jpg',
              title: 'hip hop wired to dance make',
              date: '06 november 2021',
              text: 'Driving short distances music is a music genre that includes traditional folk music and the contemporary genre that evolved from the former'
            },
            {
              img:'../../public/instrumental-rock/assets/hip_hop_wired_to_dance_make.jpg',
              title: 'hip hop wired to dance make',
              date: '06 november 2021',
              text: 'Driving short distances music is a music genre that includes traditional folk music and the contemporary genre that evolved from the former'
            },
            {
              img:'../../public/instrumental-rock/assets/hip_hop_wired_to_dance_make.jpg',
              title: 'hip hop wired to dance make',
              date: '06 november 2021',
              text: 'Driving short distances music is a music genre that includes traditional folk music and the contemporary genre that evolved from the former'
            },
          ]
        };
    },
    methods: {

    },
    components:{
        
    }
}
</script>

<template>
   <div class="another-fuckin-carousel">
          <ul>
            <li>music blog</li>
            <li>best music blog</li>
          </ul>
          <div class="carousel">
            <div v-for="(elem,i) in carouselCards" class="carousel-card" :class="counter ">
              <div class="img-box">
                <img :src="elem.img" alt="">
              </div>
              <h4 class="my-2 text-uppercase ">{{ elem.title }}</h4>
              <p class="my-2">{{ elem.date }}</p>
              <p class="my-2">{{ elem.text }}</p>
            </div>
          </div>
        </div>
        <button @click="counter - 2">
          prev
        </button>


        <button @click="counter + 2">
          next
        </button>
</template>
                               
                               

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
@import "../assets/scss/partials/variables.scss";
.another-fuckin-carousel{
      ul{
        text-align: center;
        color: white;
        margin-top: 80px;
            & :nth-child(1){
                font-size: 1.5rem;
                text-transform: uppercase;
            }
            & :nth-child(2){
                font-size: 4rem;
                text-transform: uppercase;
            }
        }
        .carousel{
          width: 1400px;
          margin: 0 auto;
          display: flex;
          color: white;
          .carousel-card{
            width: 400px;
            height: 500px;
            .img-box{
              width: 400px;
              height: 250px;
                img{
                width: 100%;
                height: 100%;
                }
              }
              & :nth-child(3){
               color: $orange-color;
              }
               & :nth-child(4){
               color: darkgray;
               font-size: 1.2rem;
              }
          }
        }

    }
 
</style>

