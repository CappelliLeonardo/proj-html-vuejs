<script>
import cardSection from "../components/cardSection.vue";
import ParallaxSection from "../components/ParallaxSection.vue";
import CounterSection from "../components/CounterSection.vue";
import SliderSection from "../components/SliderSection.vue";
import Jumbosection from "../components/Jumbosection.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    cardSection,
    ParallaxSection,
    CounterSection,
    SliderSection,
    Jumbosection
  },
};
</script>

<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron-1 p-0 position-relative text-center">
            <Jumbosection/>
        </div>
        <div class="col-12 info-section">
          <div class="absolute-box d-flex">
            <div class="info-cell">
              <div class="logo-box">
                <img src="/instrumental-rock/speaker.svg" alt="" />
              </div>
              <div class="info-box text-center">
                <ul>
                  <li class="my-3 text-uppercase"><h2>Original ideas</h2></li>
                  <li>
                    Contrary Popular Belief, Lorem Ipsum Not Simply Ipsum Random
                    Text.
                  </li>
                </ul>
              </div>
            </div>
            <div class="info-cell">
              <div class="logo-box">
                <img src="/instrumental-rock/disc.svg" alt="" />
              </div>
              <div class="info-box text-center">
                <ul>
                  <li class="my-3 text-uppercase"><h2>Music studio</h2></li>
                  <li>
                    Contrary Popular Belief, Lorem Ipsum Not Simply Ipsum Random
                    Text.
                  </li>
                </ul>
              </div>
            </div>
            <div class="info-cell">
              <div class="logo-box">
                <img src="/instrumental-rock/headphones.svg" alt="" />
              </div>
              <div class="info-box text-center">
                <ul>
                  <li class="my-3 text-uppercase"><h2>Acoustic covers</h2></li>
                  <li>
                    Contrary Popular Belief, Lorem Ipsum Not Simply Ipsum Random
                    Text.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="text-container">
            <ul>
              <li>who we are</li>
              <li>sense the jazz</li>
              <li>
                The Story Of Jazz And Blues Society Is The Story Of
                Determination, Passion, Idealism, Community, And Of Course,
                Music. Founded In 1985 And Incorporated In 1986, As A Community
                Based, Not-For-Profit, Charitable Arts Organization Located In
                Vancouver, British Columbia, The Society, From The Very
                Beginning, Has Worked Diligently To Establish Vancouver As A
                Centre For The Creation And Exchange Of Sounds And Ideas Between
                The Local, National And International Music Communities.
              </li>
              <li>
                <button>
                  <a href="#">Read more</a>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 youtube-section">
          <button
            class="btn d-flex justify-content-center align-items-center"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <div class="content text-center">
              <div class="icon-box">
                <i class="fa-solid fa-play"></i>
              </div>
              <h2 class="text-white">NEW MUSIC VIDEO</h2>
            </div>
          </button>

          <div
            class="offcanvas"
            data-bs-dismiss="offcanvas"
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div class="my-offcanvas">
              <iframe
                src="https://www.youtube.com/embed/mPdF9WX2EUc?rel=0"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <cardSection />
    <ParallaxSection />
    <CounterSection />
    <SliderSection />
  </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main.scss" as *;
@import "../assets/scss/partials/variables.scss";
.jumbotron-1 {
  height: 1000px;
  .carousel {
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

.info-section {
  height: 700px;
  position: relative;
  background-color: black;
  .absolute-box {
    position: absolute;
    z-index: 2;
    width: 1200px;
    left: 50%;
    transform: translate(-50%, -50%);

    .info-cell {
      width: calc((100% / 3) - 5px);
      height: 380px;
      background-color: #121212;
      color: white;

      &:nth-child(1) {
        margin-right: 20px;
      }
      &:nth-child(3) {
        margin-left: 20px;
      }
      .logo-box {
        width: 25%;
        margin: 70px auto 20px;
        height: 100px;
        img {
          width: 100%;
          height: 100%;
          filter: invert(0.8);
        }
        transition: 0.8s ease-in-out color;
        &:hover img {
          color: $orange-color;
        }
      }
    }
  }
  ul {
    padding: 0px;
  }
  .text-container {
    width: 50%;
    margin: 0px auto;
    text-align: center;
    color: white;
    ul {
      margin-top: 280px;
      li {
        margin: 30px 0px;
      }
      & :nth-child(1) {
        font-size: 1.3rem;
        text-transform: uppercase;
        color: $orange-color;
      }
      & :nth-child(2) {
        font-size: 4rem;
        text-transform: uppercase;
      }
      & :nth-child(4) {
        font-size: 2rem;
        button {
          width: 200px;
          height: 50px;
          background-color: transparent;
          border: 1px solid $orange-color;
          transition: 0.5s background-color ease-in-out;
          a {
            color: white;
            text-decoration: none;
            font-size: 1rem;
            margin: auto;
          }
          &:hover {
            background-color: $orange-color;
          }
        }
      }
    }
  }
}

.youtube-section {
  height: 700px;
  padding: 0;
  background-color: black;
  .offcanvas {
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    .my-offcanvas {
      width: 1400px;
      height: 600px;
      background-color: black;
      iframe {
        width: 100%;
        height: 100%;
        margin: auto;
      }
    }
  }
  button {
    width: 100%;
    height: 100%;
    background-image: url(../../public/instrumental-rock/assets/Video-1536x541.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border: none;
    .icon-box {
      border: 5px solid white;
      color: white;
      width: 100px;
      height: 100px;
      border-radius: 100%;
      font-size: 2rem;
      position: relative;
      margin: 10px auto;
      .fa-play {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-40%, -50%);
      }
    }
  }
}
</style>
