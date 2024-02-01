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
    <header class="container-fluid" >

       

            <div class="row">

                <div class="col-12">
                    
                    <div class=" p-0 navbar navbar-expand-md ">
                        <div>
                            <img src="../../public/instrumental-rock/assets/Logo.png" alt="">
                        </div>


                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                <li v-for="(x,i) in navigazione" :key="i" :class="i==3?'drop':''">
                                <router-link v-if="i==0" :to="{name:'AppMain'}" >{{ x.title }}</router-link>
                                <router-link v-else-if="i==4" :to="{name:'AboutUsSection'}" >{{ x.title }}</router-link>
                                <router-link v-else-if="i==5" :to="{name:'ContactUsSection'}" >{{ x.title }}                                   
                                </router-link>
                                <a v-else href="#nogo">
                                {{x.title}}
                                </a>
                                </li>
                                <li>
                                    <a href="#">Shop</a>  <i class="fas fa-angle-down"></i>
                                        <ul>
                                            <li><a href="#">ProductType</a>
                                                <ul>
                                                    <li><i class="fas fa-arrow-right"></i><a href="#">Simple Product</a></li>
                                                    <li><i class="fas fa-arrow-right"></i><a href="#">External/Affiliate Product</a></li>
                                                    <li><i class="fas fa-arrow-right"></i><a href="#">Downloadable Product</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><a href="#">ShopPage</a>
                                                <ul>
                                                    <li><i class="fas fa-arrow-right"></i><a href="#">Simple Product</a></li>
                                                    <li><i class="fas fa-arrow-right"></i><a href="#">External/Affiliate Product</a></li>
                                                    <li><i class="fas fa-arrow-right"></i><a href="#">Downloadable Product</a></li>
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
.container-fluid{
    
    height: 100px;
    padding-top: 30px;
    background-color: black;
    color: white;
}
.container-drop{
    width: 300px;
    color: white;
    background-color:#1F1F1F ;
    opacity: 0;   
}


.navbar ul li ul {
  display: none;
}

.navbar ul li:hover ul {
  display: block;
  position: absolute;
  right:0;
  width: 200px;
  margin-top: 1rem;
}

.navbar ul li:hover ul li,
.navbar ul li ul li:hover ul li {
  display: block;
  background: #e7e7e7;
}

#navbar ul li:hover ul li a {
  color: #333;
}
#navbar ul li:hover ul li:hover {
  background: #e0e0e0;
  color: inherit;
}

#navbar ul li ul li:hover ul {
  display: block;
  position: absolute;
  top: 0;
  left: 100%;
  margin-left: 5px;
  margin-top: 5px;
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
