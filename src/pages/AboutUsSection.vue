<script>
import ParallaxForAbout from '../components/ParallaxSection.vue';
import CounterSection from '../components/CounterSection.vue';
import CardForAbout from '../components/CardForAbout.vue';
import AccordionSection from '../components/AccordionSection.vue';
import JazzSection from '../components/JazzSection.vue';
export default {
    data() {
        return {

        };
    },
    components: {
        ParallaxForAbout,
        CounterSection,
        CardForAbout,
        AccordionSection,
        JazzSection,
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

       
        <JazzSection/>
        <ParallaxForAbout/>
        <AccordionSection/>
        <CounterSection/>
        <CardForAbout/>
        

    </main>
</template>

<style lang="scss" scoped>

    .container-fluid{
        
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
    .container-jazz{
        width: 680px;
    }
    
    

     .accordion-button {
        background-color: black;
        color: white;
        padding: 0 0 0 5;
        font-size: 1.2rem;
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
