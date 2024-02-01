<script>
export default {
    data() {
        return {

        };
    },
    
    
    methods: {

    },
    mounted(){

    },
}
</script>

<template>
    <section class="container-fluid">
        <div class="container">
            <div class="container-jazz">
                <h4>
                    who we are
                </h4>
               <h2>
                        sense the jazz
                </h2>
                <p>
                    The Story Of Jazz And Blues Society Is The Story Of Determination, Passion, Idealism,
                    Music. Founded In 1985 And Incorporated In 1986, As A Community Based, Not-For Organization
                    Located In Vancouver, British Columbia, The Society, From The Very Begi To Establish Vancouver 
                    As A Centre For The Creation And Exchange Of Sounds  
                </p>
                <button>READ MORE</button>
            </div>

            <div class="boxImg">
                <img src="https://www.rockshots.eu/wp-content/uploads/2018/02/jesse-ramirez-R1NBUvxIdu8-unsplash-960x960.jpg" alt="">
            </div>
        </div>  
    </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
.container-fluid{
        
        background-color: black;
        color: white;
        
       
    }
    
    .container {
        width: 1400px;
        height: 800px;
        padding: 50px;
        display: flex;
        justify-content: space-between;
        
    }
    .container-jazz{
        width: 680px;
    }
        
    img {
        width:680px ;
        height: 500px;
        max-width: 100%;
        max-height: 100%;
        
    }

    button{
    background-color: transparent;
    color: white;
    border-color: #F2870C;
    font-size: 15px;
    padding: 10px 50px;
    margin-top: 35px;
    }

    button:hover{
    background-color:#F2870C ;
    }
</style>