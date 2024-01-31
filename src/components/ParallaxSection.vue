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
    <div class="container-fluid parallax-container">
        <div class="text-container text-start ">
            <h4 class="mb-2">INSTRUMENTAL ROCK</h4>
            <p class="mb-3 album">ALBUM OUT NOW</p>
            <button>
                <a href="#">READ MORE</a>
            </button>
        </div>
    </div>
</template>
                               
                               

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
.parallax-container{
    height:800px;
    background-image: url('../../public/instrumental-rock/assets/cms_parallax.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    .text-container{
        margin: 0 auto;
        width: 1400px;
        height: 100%;
        color: white;
        padding-top: 250px;
         button{
                width: 200px;
                height: 50px;
                background-color: white;
                 a{
                    
                    text-decoration: none;
                    color: black;
                    }
               }
               .album{
                font-size: 5.5rem;
                font-weight: 500;
                
               }
    }   
}
</style>
