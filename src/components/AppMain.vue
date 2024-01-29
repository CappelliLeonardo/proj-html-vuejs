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
            <div class="row">
                <div class="col-12 jumbotron-1">
                </div>
                <div class="col-12 info-section">
                    <div class="text-container">
                        <ul>
                            <li>who we are</li>
                            <li>sense the jazz</li>
                            <li>The Story Of Jazz And Blues Society Is The Story Of Determination, Passion, Idealism, Community, And Of Course, Music. Founded In 1985 And Incorporated In 1986, As A Community Based, Not-For-Profit, Charitable Arts Organization Located In Vancouver, British Columbia, The Society, From The Very Beginning, Has Worked Diligently To Establish Vancouver As A Centre For The Creation And Exchange Of Sounds And Ideas Between The Local, National And International Music Communities.</li>
                            <li>
                                <button>
                                    READ MORE
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
.jumbotron-1{
    height: 1000px;
    background-image: url(../../public/instrumental-rock/image.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.info-section{
    height: 700px;
    .text-container{
        width: 50%;
        margin: 0 auto;
        text-align: center;
    }
}
</style>
