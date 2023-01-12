<template>
  <span class="wrapper">
    <header class="bg-primary text-secondary q-pa-lg">
      <!-- parte izquierda -->
      <div class="title">JOSÉ</div>
      <div class="title">DANIEL</div>
      <div class="title">BARRÍA</div>
      <div class="title">REYES</div>

      <div class="text-white my-position">FULLSTACK DEVELOPER</div>

      <!-- contact -->
        <div class="subtitles text-secondary q-px-none ">CONTACT</div>
        <div v-for="contact in contacts" :key="contact" class="text-white">{{ contact }}</div>

      <!-- technologies -->
      <div class="subtitles text-secondary q-px-none">TECHNOLOGIES</div>
      <div v-for="tech in technologies" :key="tech" class="text-white">{{ tech }}</div>

      <!-- about me -->
      <div class="subtitles bg-primary text-secondary">ABOUT ME</div>
        <div class="story text-white text-justify">{{ myStory }}</div>
      </header>
    <main class="content">
      <!-- parte derecha -->
      <q-scroll-area style="width: 100%; height: 100%;">
        <div class="row-1">

          <!-- latest projects -->
          <section class="q-pa-md">
            <div class="section bg-primary text-secondary q-mb-md q-py-md q-px-sm">LATEST PROJECTS</div>
            <q-carousel
              v-model="slide"
              transition-prev="jump-right"
              transition-next="jump-left"
              swipeable
              animated
              control-color="white"
              prev-icon="arrow_left"
              next-icon="arrow_right"
              padding
              arrows
              class="bg-black text-white shadow-1 "
            >
              <q-carousel-slide v-for="(project, id) in projects" :key="id" :name="project.title" class="column no-wrap flex-center">
              <work-done
                class="card"
                :title="project.title"
                :description="project.description"
                :imgName="project.imgSrc"
              />
              </q-carousel-slide>
            </q-carousel>
            <div class="cards">

            </div>
          </section>
        </div>
        <div class="row-2 q-pa-md">
          <!-- work experience -->
          <section>
            <div class="section bg-primary text-secondary q-mb-md q-py-md q-px-sm">WORK EXPERIENCE</div>
                <div v-for="(work, i) in workExperiences" :key="'work'+1+i" class="item q-mb-md q-px-sm">
                  <div class="subtitles text-secondary q-px-none ">{{ work.position }}</div>
                  <div class="text-secondary">{{ work.place }}</div>
                  <div v-for="(responsibility, j) in work.responsibilities" :key="responsibility+i*(1+j)" class="text-black">{{ responsibility }}</div>
                </div>
          </section>
          <!-- education -->
          <section>
            <div class="section bg-primary text-secondary q-mb-md q-py-md q-px-sm">EDUCATION</div>
            <div v-for="(education,i) in educations" :key="'clase' + (1+i)" class="item q-mb-md q-px-sm">
              <div class="subtitles text-secondary q-px-none ">{{ education.place }}</div>
              <div class="text-secondary">{{ education.duration }}</div>
              <div v-for="(learning,j) in education.learnings" :key="'learning'+ learning + i*(1+j)" class="text-black">{{ learning }}</div>
            </div>
          </section>
          <!-- social networks -->
          <section>
              <div class="section bg-primary text-secondary q-mb-md q-py-md q-px-sm">SOCIAL NETWORKS</div>
              <a class="q-mb-md q-px-sm" v-for="(url, urlIndex) in socialNetworks" style="display:block" :key="urlIndex" :href="`https://${url}`" target="_blank" rel="noopener noreferrer">https://{{ url }}</a>
          </section>
        </div>
      </q-scroll-area>
    </main>
  </span>
</template>

<script>
import WorkDone from '../components/WorkDone'
import data from './mixin';
export default {
  name: 'Desktop',
  mixins: [data],
  components: {
    WorkDone
  },
  data() {
    return {
      slide: 'Crypto'
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  grid-row: 1fr;
  height: 100vh;


  h1,h2,h3 {
    margin: 0;
  }

  .paragraph {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
  }

  .my-position {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 16px;
  }

  .subtitles {
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    font-size: 18px;
  }

  .section {
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    font-size: 26px;
  }

  .title {
    font-weight: 900;
    font-family: 'Archivo Black', sans-serif;
    font-size: 47px;
    margin: -15px 0 -10px 0;
  }

  .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 15px;
  }

  .content {
    display: grid;


    .row-1 {
      .cards {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        .card {
          width: 300px;
        }

      }
    }
    .row-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
      column-gap: 10px;
    }
  }
}
.image {
    width: 100%;
    margin-bottom: -7px;
}
</style>
