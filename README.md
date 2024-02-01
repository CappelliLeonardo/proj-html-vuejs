# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).




        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade col-12 jumbotron-1 w-100 p-0"
        >
          <div class="carousel-inner w-100 h-100">
            <div
              class="carousel-item w-100 h-100 active"
              data-bs-interval="1000"
            >
              <img
                src="/instrumental-rock/image.png"
                class="d-block w-100 h-100"
                alt="..."
              />
            </div>
            <div class="carousel-item w-100" data-bs-interval="1000">
              <img
                src="/instrumental-rock/image (1).png"
                class="d-block w-100 h-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev p-0"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next p-0"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>