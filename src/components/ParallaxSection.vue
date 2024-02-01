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
@import "../assets/scss/partials/variables.scss";
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
        &> :nth-child(1){
            color: $orange-color;
        }
        button{
                width: 200px;
                height: 50px;
                background-color: transparent;
                border: 1px solid $orange-color;
                transition: 0.5s background-color ease-in-out;
                 a{
                    color: white;
                    text-decoration: none;
                    font-size: 1rem;
                    margin: auto;
                    }
                    &:hover{
                        background-color: $orange-color;
                    }
               }
               .album{
                font-size: 5.5rem;
                font-weight: 500;
                
               }
    }   
}
</style>
