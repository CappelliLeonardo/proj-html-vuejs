<script>
export default {
    data() {
        return {
            clicked: false,
            submitted: false,
            form: {
                name:{
                    required: true,
                    value: ''
                },
                email:{
                    required: true,
                    value: ''
                },
                subject:{
                    required: true,
                    value: ''
                },
            }
        };
    },
    methods: {
        onSubmit() {
            this.clicked = true;
            setTimeout(() => {
                console.log('Facciamo finta di chiamare le API')
            }, 1000)
            setTimeout(() => {
                this.submitted = true
            }, 2000)
        }
    }
}
</script>

<template>
    <div class="bg-color">
        <div class="container-fluid py-5">
            <div class="container py-5 ">
                <h1>
                    CONTACT US
                </h1>
                <div>
                    <router-link :to="{name:'AppMain'}">Home</router-link>
                    <span> /</span>
                    <span> Contact Us</span>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <form @submit.prevent="onSubmit()" class="p-5">
                            <div class="row">
                                <div class="col d-flex flex-column">
                                    <label for="name">Your Name</label>
                                    <input type="text"  id="name" col="5" v-model="form.name.value">
                                    <span v-if="clicked && submitted && form.name.required && form.name.value === ''" style="color: red">
                                        The Field Is Required
                                    </span>
                                </div>
                                <div class="col d-flex flex-column ">
                                    <label for="email">Your Email</label>
                                    <input type="text" id="email" col="5" v-model="form.email.value">
                                    <span v-if="clicked && submitted && form.email.required && form.email.value === ''" style="color: red">
                                        The Field Is Required
                                    </span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col d-flex flex-column">
                                    <label for="subject">Subject</label>
                                    <input type="text" id="subject" col="5" v-model="form.subject.value">
                                    <span v-if="clicked && submitted && form.subject.required && form.subject.value ===''" style="color: red">
                                        The Field Is Required
                                    </span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col d-flex flex-column">
                                    <label for="text">Your Message (Optional)</label>
                                    <textarea name="" id="text" cols="50" rows="10"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <button type="submit" class="">SUBMIT</button>
                                </div>
                            </div>
                            <div class="row " v-if="clicked && !submitted">
                                <div class="loader col-auto"></div>
                            </div>
                            <div class="row" v-if="clicked && submitted && form.subject.required && form.subject.value ===''">
                                <div class="col">
                                    <p class="banner">
                                        One Or More Fields Have An Error. Please Check And Try Again.
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>

                    
                    <div class="col-6 d-flex flex-column align-items-start px-5 ">
                        <div>
                            <h6>
                                GET IN TOUCH
                            </h6>
                        </div>
                        <div>
                            <h2>
                                GET LATEST UPDATE
                            </h2>
                        </div>
                        
                        <div class="row">
                            <div class="col">
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <div class="col-auto">
                                <ul>
                                    <li>
                                        <h4>
                                            ADDRESS INFO
                                        </h4>
                                    </li>
                                    <li>
                                        <span>
                                            502 New Design Str, Melbourne,
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            San Francisco, CA 94110,
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            United States Of America Australia
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <i class="fa-solid fa-clock"></i>
                            </div>
                            <div class="col-auto">
                                <ul>
                                    <li>
                                        <h4>
                                            CONTACT INFO
                                        </h4>
                                    </li>
                                    <li>
                                        <span>
                                            068 26589 996
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            demo@example.com
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div class="col-auto">
                                <ul>
                                    <li>
                                        <h4>
                                            WORKING HOURS
                                        </h4>
                                    </li>
                                    <li>
                                        <span>
                                            Open: 8:00AM - Close: 18:00PM
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Saturday - Sunday: Close
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid g-0 d-flex">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11526.40698209097!2d10.874340400000001!3d43.760366299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a65ce556f5ac7%3A0x435a55ce97279556!2s50050%20Cerreto%20Guidi%20FI!5e0!3m2!1sit!2sit!4v1706613715209!5m2!1sit!2sit"
            style=""
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables.scss";
.bg-color{
    padding-top: 100px;
}
.bg-color > .container-fluid:nth-child(2){
    background-color: #000000;
    padding-top: 100px;
    padding-bottom:100px;
}
.container-fluid{
    background-color: #121212;
    color: white;
    text-align: center;
    .container{
        a{
            text-decoration: underline;
            &:hover{
                color: $orange-color;
            }
        }
    }
}

form, input, textarea{
    border: 1px solid rgba(128, 128, 128, 0.6);
    background-color: #000000;
    color:white;
    outline: none;
    text-align: left;
    padding:10px;
    textarea{
        resize: vertical;
    }
    button{
        width: 100%;
        padding:10px;
        color: white;
        font-weight: bold;
        background:transparent;
        border:1px solid $orange-color;
        &:hover{
                background-color: $orange-color;
                transition-duration: 200ms;
            }
    }
}
form{
    padding: 10px;
    >*{
        padding:10px;
    }
}

label{
    padding-bottom: 10px;
}

h6{
    color: $orange-color;
}
h6, h2{
    text-align: left;
}
h2{
    padding-top:10px;
    padding-bottom:20px;
    font-size: 3rem;
}

ul{
    text-align: left;
    >:first-child{
        padding-bottom: 10px;
    }
    li{
        padding-bottom: 5px;
    }
}
i{
    font-size: 2rem;
    &:hover{
            color: #F2870C;
            transition-duration: 200ms;
            }
}

iframe{
    width: 100%;
    height: 450px;
}

// LOADER 
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
.loader {
      border: 8px solid #f3f3f3;
      border-radius: 50%;
      border-top: 8px solid grey;
      width: 50px;
      height: 50px;
      animation: spin 2s linear infinite;
    }

.banner{
    border: 1px solid yellow;
    text-align: center;
    padding: 3px;
    margin-top: 30px;
}
</style>
