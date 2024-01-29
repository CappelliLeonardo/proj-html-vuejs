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
    <main>
        <div class="container-fluid">
            <div class="container py-5 ">
                <h1>
                    CONTACT US
                </h1>
                <div>
                    <a href="https://wordpressthemes.live/WP01/WP015/">Home</a>
                    <span> /</span>
                    <span> Contact Us</span>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        
                        <form class="w-100">
                            <div class="row">
                                <div class="col">
                                    <label for="name">Your Name</label>
                                    <input type="text" id="name" class="form-control">
                                </div>
                                <div class="col">
                                    <label for="email">Your Email</label>
                                    <input type="text" id="email" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <label for="subject">Subject</label>
                                    <input type="text" id="subject" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <label for="text">Your Message (Optional)</label>
                                    <div class="w-100">
                                        <textarea class="text-area" name="" id="text" cols="" rows="1">

                                        </textarea>
                                    </div>
                                        
                                  
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-6">
                        SEZIONE GET IN TOUCH
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.container-fluid{
    background-color: #121212;
    color: white;
    text-align: center;
    .container{
        
        a{
            text-decoration: underline;
            &:hover{
                color: #F2870C;
            }
        }
    }
}
.text-area{
    resize: both;
}
</style>
