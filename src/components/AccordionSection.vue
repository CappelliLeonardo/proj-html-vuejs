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
            <div class="pianista">
                <img src="https://wordpressthemes.live/WP01/WP015/wp-content/uploads/2022/06/Img-02.jpg" alt="">
            </div>
                        
            <div class="accordion accordion-flush pianista ms-5" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button pt-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                             CAN I SPECIFY A DELIVERY DATE WHEN ORDERING?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Sed Ut Perspiciatis Unde Omnis I Natus Error Voluptatem Accusantium  Doloremque Laudantium, Tota Aperiam, Eaque Ipsa.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            HOW INVESTING IN DEPENDEND INCER
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Sed Ut Perspiciatis Unde Omnis I Natus Error Voluptatem Accusantium  Doloremque Laudantium, Tota Aperiam, Eaque Ipsa.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            ASING TO BUSINESS SECURITY
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Sed Ut Perspiciatis Unde Omnis I Natus Error Voluptatem Accusantium   Doloremque Laudantium, Tota Aperiam, Eaque Ipsa.</div>
                    </div>
                                    
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            ELEMENT OR PAGE BUILDER USED
                        </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Sed Ut Perspiciatis Unde Omnis I Natus Error Voluptatem Accusantium   Doloremque Laudantium, Tota Aperiam, Eaque Ipsa.</div>
                    </div>
                                    
                </div>
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
    .accordion-collapse{
        background-color: black;
        color: white;
    }
    .pianista {
        width: calc(100% / 2);
    }
    
    .container {
        width: 1400px;
        padding: 50px;
        display: flex;
        justify-content: space-between;
        align-items:flex-start;
    }

     .accordion-button {
        background-color: black;
        color: white;
        padding: 0 0 0 5;
        font-size: 1.2rem;
    }

    img {
        
        height: 500px;
        max-width: 100%;
        max-height: 100%;
        object-fit:contain;
    }

    button{
    background-color: transparent;
    color: white;
    border-color: #F2870C;
    font-size: 15px;
    padding: 10px 50px;
    margin-top: 35px;
    }

   
</style>