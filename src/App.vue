<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import ContactUsSection from './components/ContactUsSection.vue';
import AboutUsSection from './components/AboutUsSection.vue';

import axios from 'axios';

export default {
    data() {
        return {

        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter,
        ContactUsSection,
        AboutUsSection,
    },  
    methods: {

    },
    mounted(){

    },
}
</script>



<template>

    <AppHeader />
    <AppMain />
    <ContactUsSection/>
    <AboutUsSection/>
    <AppFooter />
    
</template>


   

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
@import "assets/scss/partials/variables.scss";
@import "../src/assets/scss/partials/variables.scss";
</style>
