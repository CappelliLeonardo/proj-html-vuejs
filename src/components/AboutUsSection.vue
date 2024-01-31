<script>
import ParallaxForAbout from './ParallaxForAbout.vue';
import CounterSection from './CounterSection.vue';
export default {
    data() {
        return {

        };
    },
    components: {
        ParallaxForAbout,
        CounterSection
    },
    methods: {

    }
}
</script>

<template>
    <main>
        <section>
            <div class="text-center dark ">
                <h1>
                    about us
                </h1>
                <div>
                    <span id="orange">
                        Home
                    </span>
                    /
                    Contact Us
                </div>

            </div>

        </section>

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
        <ParallaxForAbout/>
        
        <section  class="container-fluid">
                    <div class="container">
                        <div>
                            <img src="https://wordpressthemes.live/WP01/WP015/wp-content/uploads/2022/06/Img-02.jpg" alt="">
                        </div>
                        
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                    
                                </div>
                        </div>
                    </div>
                            
                        

        </section>

        <CounterSection/>

        <section>
            
        </section>

    </main>
</template>

<style lang="scss" scoped>

    .container-fluid{
        
        background-color: black;
        color: white;
        
       
    }
    
    .container {
        width: 1400px;
        padding: 50px;
        display: flex;
        justify-content: space-between;
        align-items:flex-start;
    }
    .container-jazz{
        width: 680px;
    }
    
    

     .accordion-button {
        background-color: black;
        color: white;
        padding: 0;
        font-size: 2.5rem;
        

    }

    
    

    #orange:hover {
        color: #F2870C;
    }

    h1 {
        font-size: 38px;
        text-transform: uppercase
    }
    .dark {
        background-color:#121212;
        color: white;
        height: 300px;
        padding-top: 100px;
        font-family: Oswald;
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
