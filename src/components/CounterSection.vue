<script>

export default {
    data() {
        return {

        };
    },
    methods: {

    },
    components:{
        
    }
}
</script>

<template>
    <div class="counter"></div>
</template>
                               
                               

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;

@property --num {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

.counter {
  animation: counter 5s infinite alternate ease-in-out;
    counter-reset: num var(--num);
  font: 800 40px system-ui;
  padding: 2rem;
}
.counter::after {
  content: counter(num);
}

@keyframes counter {
  from {
    --num: 0;
  }
 to {
     --num: 100;
   }
 
}

</style>


<!-- 
    background-image: url('../../public/instrumental-rock/assets/cms_parallax.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
 -->