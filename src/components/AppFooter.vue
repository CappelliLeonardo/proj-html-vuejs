<script>
export default {
    data() {
        return {
            information: [
                {
                    title: "Product Support"
                },
                {
                    title: "Checkout"
                },
                {
                    title: "Report Abuse"
                },
                {
                    title: "My Account"
                },
                {
                    title: "Order Status"
                },
            ],
            support: [
                {
                    title: "Policies & Rules"
                },
                {
                    title: "Privacy Policy"
                },
                {
                    title: "License Policy"
                },
                {
                    title: "My Account"
                },
                {
                    title: "Locality"
                },
            ]

        };
    },
    methods: {

    }
}
</script>

<template>
    
    <footer  class="container-fluid">
       <hr> 
        <div class="container-md">
            <div class="row">
                <div class="col-sm-12 col-md-4 col-lg-3 mb-3 space ">
                    <div class="text-left">
                        <h3>BOOKINGS</h3>
                        <p>
                            502 New Design Str, Melbourne, San Francisco, CA 94110, United States Of America​ Australia
                            
                        </p>
                        <h6>
                            T: 1 123-456-789
                        </h6>
                        <h6>
                            Email: <a href="#">demo@example.com</a>
                        </h6> 
                        <a href="#">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                             
                        
                                         
                    </div>
                </div>

                <div class="col-sm-12 col-md-4 col-lg-2 mb-4  space">
                    <div class="text-left">
                        <h3>INFORMATION</h3>
                        <ul>
                            <li v-for="(pippo,i) in information" :key="i" >{{pippo.title}}</li>
                           
                        </ul>
                    </div>
                </div>

                <div class="col-sm-12 col-md-4 col-lg-2 mb-3  space ">
                    <div class="text-left">
                        <h3>SUPPORT</h3>
                        <ul>
                            <li v-for="(pluto,i) in information" :key="i" >{{pluto.title}} </li>
                        </ul>
                    </div>
                </div>

                <div class="col-sm-12 col-md-4 col-lg-2 mb-3  space">
                    <h3>NEWSLETTER</h3>
                    <div>
                        <input id="emailInput" type="email" class="form-control" placeholder="Email" >  
                    </div>
                    <div>
                        <textarea   placeholder="Message"></textarea>  
                    </div>
                    <button class="form-control">SEND MESSAGE</button>
                </div>
            </div>
        </div>

        <hr>

        <div class="text-center">
            <h6>© 2024 All Rights Reserved. Developed By TemplateMela</h6>
        </div>
       
    </footer>
</template>

<style lang="scss" scoped>
.container-fluid{
    
    padding-bottom: 20px;
    background-color: black;
    color: darkgray; 
}
hr{
    margin:0px 0px 1rem 0px!important;
}
p{
    font-size: 15px;
    line-height: 1.5;
    
}
footer .row h3{
    margin-bottom: 20px;
    color: white;
}
h6{
    margin-bottom: 0px;
}
ul {
    list-style: none;
    
}
li{
   margin: 10px 0; 
}

button{
    background-color: transparent;
    color: white;
    border-color: #F2870C;
    
}
footer .row #emailInput{
    background: transparent;
    border: 1 solid darkgray;
    color: white;
    border-radius: 0;
}

footer .row > .space {
    line-height: 2;
    margin-right: 70px;
    margin-top: 70px;
    margin-bottom: 70px;
    margin-top: 70px;
}

textarea {
  background: transparent;
  font-weight: 400%;
  font-size: 15px;
  color: white;
  border: 1 solid darkgray;
  margin-top: 20px;
  margin-bottom: 20px;
  outline: none;
  max-height: 200px;
  max-width: 300px;
  border-radius: 0;
  
}
button:hover{
    background-color:#F2870C ;
}
li:hover{
    color:#F2870C ;
}
a:hover{
    color:#F2870C ;
}

i{
    margin-right: 1.5rem !important;
}

</style>
