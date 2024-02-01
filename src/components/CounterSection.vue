<script>
import CarouselSection from './CarouselSection.vue';
export default {
    data() {
        return {

        };
    },
    methods: {

    },
    components:{
        CarouselSection
    }
}
</script>

<template>
    <div class="container-fluid ">
        <div class="counter-container d-flex align-items-center justify-content-center  text-white text-center">
            <div class="counter-box">
                <img src="../../public/instrumental-rock/assets/image (13).svg" alt="">
                <div class="counter p-1 my-2">
                </div>
                <h3>CONCERT</h3>
            </div>
            <div class="counter-box">
                <img src="../../public/instrumental-rock/assets/image (14).svg" alt="">
                <div class="counter-1 p-1 my-2">
                </div>
                <h3>HAPPY CLIENTS</h3>
            </div>
            <div class="counter-box">
                <img src="../../public/instrumental-rock/assets/image (15).svg" alt="">
                <div class="counter-2 p-1 my-2">
                </div>
                <h3>MUSIC AWARDS</h3>
            </div>
            <div class="counter-box">
                <img src="../../public/instrumental-rock/assets/image (16).svg" alt="">
                <div class="counter-3 p-1 my-2">
                </div>
                <h3>TOTAL SONGS</h3>
            </div>
            
        </div>
       
        <CarouselSection/>
    </div>
    
</template>
                               
                               

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
.container-fluid{
    background-color: black;
    height: 1200px;
    .counter-container{
        width: 70%;
        margin: 0 auto;
        height: 400px;
        background-image: url('../../public/instrumental-rock/assets/counter_parallax.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        & :nth-child(2){
            margin: 0px 3rem;
        }
        & :nth-child(3){
            margin: 0px 3rem;
        }
        .counter-box{
            img{
                width: 70px;
                height: 100px;
                filter: invert(1);
            }
        }
    }
    
}


@property --num {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

.counter {
    color: white;
  animation: counter 3s forwards ease-in-out;
    counter-reset: num var(--num);
  font: 800 40px system-ui;
  padding: 2rem;
}
.counter::after {
    content: counter(num);
}

@keyframes counter {
0% {
    --num: 0;
  }

100%{
    --num:900
}   
}
@property --num {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

.counter-1 {
    color: white;
  animation: counter 3s forwards ease-in-out;
    counter-reset: num var(--num);
  font: 800 40px system-ui;
  padding: 2rem;
}
.counter-1::after {
    content: counter(num);
}

@keyframes counter {
0% {
    --num: 0;
  }

100%{
    --num:800
}   
}
@property --num {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

.counter-2 {
    color: white;
  animation: counter 3s forwards ease-in-out;
    counter-reset: num var(--num);
  font: 800 40px system-ui;
  padding: 2rem;
}
.counter-2::after {
    content: counter(num);
}

@keyframes counter {
0% {
    --num: 0;
  }

100%{
    --num:400
}   
}


@property --num {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

.counter-3 {
    color: white;
  animation: counter 3s forwards ease-in-out;
    counter-reset: num var(--num);
  font: 800 40px system-ui;
  padding: 2rem;
}
.counter-3::after {
    content: counter(num);
}

@keyframes counter {
0% {
    --num: 0;
  }

100%{
    --num:1001
}   
}
 
</style>


<!-- 
             -->