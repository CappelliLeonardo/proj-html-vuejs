<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';


import axios from 'axios';

export default {
    data() {
        return {

        };
    },
    components: {
        AppHeader,
        AppFooter,
    },  
    methods: {

    },
    mounted(){

    },
}
</script>
       



<template>

    <AppHeader />
    <router-view></router-view>
    <AppFooter />
   
</template>

    
<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
@import "assets/scss/partials/variables.scss";
@import "../src/assets/scss/partials/variables.scss";
</style>
    
    


   

