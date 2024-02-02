<script>
import ParallaxForAbout from '../components/ParallaxSection.vue';
import CounterSectionFourAbout from '../components/CounterSectionFourAbout.vue';
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
        CounterSectionFourAbout,
        CardForAbout,
        AccordionSection,
        JazzSection,
    },
    methods: {

    }
}
</script>

<template>
    
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
        <CounterSectionFourAbout/>
        <CardForAbout/>
        

    
</template>

<style lang="scss" scoped>
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

    

</style>
