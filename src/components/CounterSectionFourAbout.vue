<script>

export default {
    data() {
        return {
          counters:[
            {
              title: 'concert',
              number: 900,
              counter:0,
              img:'/instrumental-rock/assets/image (13).svg'
            },
            
            {
              title: 'happy clients',
              number: 800,
              counter:0,
              img:'/instrumental-rock/assets/image (14).svg'
            },
            {
              title: 'music awards',
              number: 400,
              counter:0,
              img:'/instrumental-rock/assets/image (15).svg'
            },
            {
              title: 'total songs',
              number: 1001,
              counter:0,
              img:'/instrumental-rock/assets/image (16).svg'
            }
          ]
        };
    },
    methods: {
        getTheNumers(){
          this.counters.forEach((card,i) => {
            let interval=setInterval(()=> {
              if (card.counter<card.number) {
                card.counter++
              }
              else{
                clearInterval(interval)
              }
            },1*i)
          }
          )
        }
    },
            
            
    components:{
        
      
    },
    mounted(){
      this.getTheNumers();
    }
  }

</script>

<template>
    <div class="container-fluid ">
        <div class="counter-container d-flex align-items-center  text-white text-center">
            <div v-for="(elem , i ) in counters" :key="i" class="counter-box">
                <img :src="elem.img" alt="">
                <div class="counter p-1 my-2">
                  {{ elem.counter }}
                </div>
                <h3>{{ elem.title }}</h3>
            </div>
        </div>
       
        
        
    </div>
</template>
    
           
            
       
                               
                               

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
.container-fluid{
    background-color: black;
    height: 400px;
    .counter-container{
        width: 70%;
        margin: 0 auto;
        height: 400px;
        background-image: url('/instrumental-rock/assets/counter_parallax.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        & :nth-child(2){
            margin: 0px 3rem;
        }
        & :nth-child(3){
            margin: 0px3rem;
        }
        .counter-box{
          margin-left: 5px;
          width: calc((100% / 4) - 5px);
            img{
                width: 70px;
                height: 100px;
                filter: invert(1);
            }
            .counter{
              font-size: 2rem;
            }
            h3{
              text-transform: uppercase;
            }
        }
    }
    
}



</style>


<!-- 
             -->