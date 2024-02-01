<script>
export default {
  data() {
    return {
      cards: [
        {
          img: "https://wordpressthemes.live/WP01/WP015/wp-content/uploads/2022/06/team_01.jpg",
          name:'LEO MASSI',
          title: 'Musician'
        },
         {
          img: "https://wordpressthemes.live/WP01/WP015/wp-content/uploads/2022/06/team_02.jpg",
          name:'LEO MASSI',
          title: 'Drums'
        },
         {
          img: "https://wordpressthemes.live/WP01/WP015/wp-content/uploads/2022/06/team_03.jpg",
          name:'LEO MASSI',
          title: 'Cello'
        },
         {
          img: "https://wordpressthemes.live/WP01/WP015/wp-content/uploads/2022/06/team_04.jpg",
          name:'LEO MASSI',
          title: 'Guitar'
        },
         
      ]
    };
  },
  methods: {},
};
</script>

<template>
    <div class="container-fluid card-section">
        <p id="title-1 ">who we are</p>
        <p id="title-2">OUR STAFF</p>
        <div class="card-container d-flex justify-content-between  ">
            <div v-for="(elem,i) in cards" :key="i" class="card text-center ">
                <div class="img-box">
                    <img :src="elem.img" alt="">
                </div>
                <div class="title-box mt-1">
                    <h2>{{ elem.name }}</h2>
                    <h4>{{ elem.title }}</h4>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
.card-section{
    height: 700px;
    background-color: black;
    text-align: center;
    color: white;
   padding-top: 50px; 
    #title-1{
        font-size: 1.5rem;
        text-transform: uppercase;
        
    }
    #title-2{
        font-size: 4rem;
        text-transform: uppercase;
    }
    .card-container{
        width: 1200px;
        min-height: 20%;
        margin: auto;
        flex-wrap: wrap;
        .card{
            width: calc((100% / 4) - 20px);
            height: 470px;
            color: white;
            border: none;
            background-color: black;
           
            h4{
                font-size: 1.1rem;
                
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
}


</style>