<script>
export default {
    data() {
        return {

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
                                <li class="nav-item active">
                                    Home
                                </li>
                                <li class="nav-item">
                                    Blog
                                </li>
                                <li class="nav-item  ">
                                    Gallery
                                </li>
                                    
                                <li class=" nav-item  dropdown "  data-toogle="dropdown">
                                    Events
                                        <ul class="dropdown-menu">
                                            <li>Choral Music</li>
                                            <hr>
                                            <li>Concert Band</li>
                                            <hr>
                                            <li>Opera Concerts</li>
                                            <hr>
                                            <li>Symphony Orchestra</li>
                                            <hr>
                                            <li>Family Concerts</li>
                                        </ul>
                                </li>
                                
                
                                <li class="nav-item ">
                                    About Us
                                </li>
                                <li class="nav-item ">
                                    Contact Us
                                </li>
                                <li class="nav-item dropdown" data-toogle="dropdown">
                                    Shop
                                        <ul class="dropdown-menu">
                                            <li class="dropdown"  data-toogle="dropdown">
                                                Product Type
                                                    <ul class="dropdown-menu">
                                                        <li>Simple Product</li>
                                                        <hr>
                                                        <li>External/Affiliate Product</li>
                                                        <hr>
                                                        <li>>Downloadable Product</li>
                                                        <hr>
                                                        <li>Group Product</li>
                                                        <hr>
                                                        <li>In-Stock Product</li>
                                                        <hr>
                                                        <li>Variable Product</li>
                                                    </ul>
                                            </li>
                                            <hr>
                                            <li  class="dropdown"  data-toogle="dropdown">
                                                Shop Page
                                                    <ul class="dropdown-menu">
                                                        <li>Checkout</li>
                                                        <hr>
                                                        <li>Cart</li>
                                                        <hr>
                                                        <li>>Downloadable Product</li>
                                                        <hr>
                                                        <li>Downloads</li>
                                                        <hr>
                                                        <li>My account</li>
                                                        
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
