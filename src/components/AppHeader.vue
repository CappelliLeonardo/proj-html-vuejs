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
            {
                title:"Shop"
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
    <header class="container-fluid" >

        <div class="container-md">

            <div class="row">

                <div class="col">
                    
                    <div class=" p-0 navbar navbar-expand-md ">
                        <div>
                            <img src="../../public/instrumental-rock/assets/Logo.png" alt="">
                        </div>


                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li v-for="(x,i) in navigazione" :key="i" :class="i==3 || i==6?'dropdown':''" class="nav-item ">
                                   <a href="#nogo">
                                    {{x.title}}
                                   </a>
                                    <ul v-if="i==3"  class="dropdown-menu">
                                            <li v-for="(y,l) in event" :key="l">
                                                {{y.title}}
                                            </li>
                                                                                        
                                    </ul>
                                    <ul v-if="i==6"  class="dropdown-menu">
                                        <li v-for="(top,k) in shop" :key="k" :class="k==1 || k==2?'dropdown-menu':''">
                                            {{ top.title }}
                                            <ul  class="dropdown-menu">
                                                <li v-for="(plu,j) in ProductType" :key="j">
                                                 {{plu.title}}
                                                </li>
                                            </ul>
                                             <ul   class="dropdown-menu">
                                                <li v-for="(min,y) in ShopPage " :key="y">
                                                    {{min.title}}
                                                </li>
                                            </ul>  
                                            
                                        </li>
                                    </ul>
                                </li>                                                                                                                                                                                                      
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </header>
</template>

<style lang="scss" scoped>
.container-fluid{
    
    height: 100px;
    padding-top: 30px;
    background-color: black;
    color: white;
}

li {
    margin-right: 40px;
}

.img{ 
    width: 100%;
    
}
.dropdown:hover .dropdown-menu {
    background-color:#1F1F1F ;
    color: white;
    display: block;
    margin-top: 0; /* remove the gap so it doesn't close */
}
.dropdown .dropdown-menu > li {
    padding: 10px;
    
    
}

.active {
    color: orange;
}

li:hover{
    color:#F2870C ;

}



</style>
