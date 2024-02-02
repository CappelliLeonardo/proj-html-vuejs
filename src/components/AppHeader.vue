<script>
export default {
    data() {
        return {
            navigazione: [
                
            {
                title:"Home"                
            },
            {
                title:"Blog"
            },
            {
                title:"Gallery"
            },
            {
                title:"Events"
            },
            {
                title:"About Us"
            },
            {
                title:"Contact Us"
            },
            
            ],
            event: [
            {
                title:"Choral Music"
            },
            {
                title:"Concert Band"
            },
            {
                title:"Opera Concerts"
            },
            {
                title:"Symphony Orchestra"
            },
            {
                title:"Family Concerts"
            },
            ],
            shop: [
            {
                title:"Product Type"
            },
            {
                title:"Shop Page"
            },
            
            ],
            ProductType: [
            {
                title:"Simple Product"
            },
            {
                title:"External/Affiliate Product"
            },
            {
                title:"Downloadable Product"
            },
            {
                title:"Group Product"
            },
            {
                title:"In-Stock Product"
            },
            {
                title:"Variable Product"
            },
            ],
            ShopPage : [
            {
                title:"Checkout"
            },
            {
                title:"Cart"
            },
            {
                title:"Downloadable Product"
            },
            {
                title:"Downloads"
            },
            {
                title:"My account"
            },
            ]
        };
    },
    methods: {

    }
}
</script>

<template>
    <header class="container-fluid " >

       

            <div class="row align-items-center  h-100">

                <div class="col-12  h-100 ">
                    
                    <div class=" p-0 navbar navbar-expand-md  h-100 ">
                        <div>
                            <img src="../../public/instrumental-rock/assets/Logo.png" alt="">
                        </div>

                        <div class="collapse navbar-collapse h-100 text-uppercase " id="navbarSupportedContent">
                            <ul class="navbar-nav align-items-center  ms-auto mb-2 mb-lg-0 h-100 ">
                                <li v-for="(x,i) in navigazione" :key="i" >
                                    <router-link v-if="i==0" :to="{name:'AppMain'}" >{{ x.title }}</router-link>
                                    <li id="hover-item" class="position-relative me-0 h-100" v-else-if="i==3">{{ x.title }}
                                        <ul id="event-drop">
                                            <li v-for="(elem ,o) in event" class="text-bg-dark h-100 event-drop-item"  :key="o">
                                                {{ elem.title }}
                                            </li>
                                        </ul>
                                    </li>
                                    <router-link v-else-if="i==4" :to="{name:'AboutUsSection'}" >{{ x.title }}</router-link>
                                    <router-link v-else-if="i==5" :to="{name:'ContactUsSection'}" >{{ x.title }}                                   
                                    </router-link>
                                    <a v-else href="#nogo">
                                        {{x.title}}
                                    </a>
                                </li>
                                <li id="paperone" class="position-relative h-100 prova d-flex align-items-center ">
                                    <a href="#">Shop</a><i class="fas fa-angle-down"></i>
                                    <ul id="topolino">
                                        <li id="pippo" class="position-relative text-bg-dark"><a href="#">ProductType</a>
                                            <ul class="text-bg-dark">
                                                <li><a href="#">Simple Product</a></li>
                                                <li><a href="#">External/Affiliate Product</a></li>
                                                <li><a href="#">Downloadable Product</a></li>
                                            </ul>
                                        </li>
                                    
                                    
                                        <li id="pluto" class="position-relative text-bg-dark"><a href="#">ShopPage</a>
                                            <ul class="text-bg-dark">
                                                <li><a href="#">Simple Product</a></li>
                                                <li><a href="#">External/Affiliate Product</a></li>
                                                <li><a href="#">Downloadable Product</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>                                                                                                                                                                            
                        </div>
                    </div>
                </div>
            </div>
    </header>
</template>
                                


<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
.navbar-nav > *{
        border-bottom: none;
    }
    .container-fluid{
        height: 100px;
        background-color: black;
        color: white;
        position: fixed;
        z-index: 3;
    }
li , router-link , a , i{
    transition:0.1s color ease-in-out;
}
#hover-item{
    border-bottom: none;
    height: 100%!important;
    padding:50px 0px;
}
.event-drop-item:hover{
    color:$orange-color!important;
}

#event-drop{
    display: none;
    position: absolute;
    z-index: 2;
    top:90%;
    .event-drop-item{
        width: 300px;
        height: 50px;
        border-bottom:1px solid darkgray ;
        padding: 10px 0px 0px 10px;
        margin-right: 0px;
        line-height: 50px;
        color: $orange-color;
    }
}

#hover-item:hover #event-drop{
   display: block;
}
#topolino{
   display: none;
   position: absolute;
   z-index: 2;
   top: 100%;
   right: 0%;
   li{
       width: 300px;
       height: 50px;
       border-bottom:1px solid darkgray ;
       padding: 10px 0px 0px 10px;
       margin-right: 0px;
       
   }
}

#paperone:hover #topolino{
    display: block;
}

#pippo > ul {
    display: none;
    position: absolute ;
    z-index: 2;
    right: 100%;
    top: 0;
}
    
#pluto > ul {
    display: none;
    position: absolute ;
    z-index: 2;
    right: 100%;
    top: 0%;
}
#pippo:hover > a{
color: $orange-color;
}

#pluto:hover > a{
    color: $orange-color;
}

#pippo:hover  ul {
    display: block;
    color: $orange-color;
}

#pluto:hover  ul {
    display: block;
    color: orange;
}

li {
    margin-right: 40px;
    border-bottom: 1px solid;
}

.img{ 
    width: 100%;
    
}
.drop:hover .container-drop {
   
    opacity: 1;
     
}
.active {
    color: orange;
}

li:hover{
    color:#F2870C ;

}
</style>
            
        
                
            
       
        
                                    
                               
                                




    








