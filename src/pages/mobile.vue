<template>
  <span class="wrapper">
    <header class="bg-primary text-secondary q-px-md q-py-sm">
      <div class="title">DANI BARRÍA</div>
      <div class="text-white my-position ma-0 pb-10 px-15">FULLSTACK DEVELOPER</div>
    </header>
      <!-- INITIAL -->
      <main class="q-pa-md">
        <article class="container">
          <div class="two-items">
            <div class="item">
              <div class="subtitles text-secondary q-px-none ">CONTACT</div>
                <div v-for="contact in contacts" :key="contact" class="text-black">{{ contact }}</div>
            </div>
            <div class="item q-mt-xs">
              <div class="subtitles text-secondary q-px-none">SOCIAL NETWORKS</div>
              <a v-for="(url, urlIndex) in socialNetworks" style="display:block" :key="urlIndex" :href="`https://${url}`" target="_blank" rel="noopener noreferrer">{{ url }}</a>
            </div>
          </div>
          <div class="item">
            <div class="subtitles text-secondary q-px-none">TECHNOLOGIES</div>
              <div v-for="tech in technologies" :key="tech" class="text-black">{{ tech }}</div>
          </div>
        </article>
      </main>
      <!-- LATEST PROJECTS -->
      <section class="q-pa-md">
        <div class="section bg-primary text-secondary q-mb-md q-py-md q-px-sm">LATEST PROJECTS</div>
        <work-done
          class="q-mb-xl"
          v-for="(project, id) in projects"
          :key="id"
          :title="project.title"
          :description="project.description"
          :imgName="project.imgSrc"
        />
      </section>
      <!-- Work Experience -->
      <section class="q-pa-md">
        <div class="section bg-primary text-secondary q-mb-md q-py-md q-px-sm">WORK EXPERIENCE</div>
            <div v-for="(work, i) in workExperiences" :key="'work'+1+i" class="item q-mb-md q-px-sm">
              <div class="subtitles text-secondary q-px-none ">{{ work.position }}</div>
              <div class="text-secondary">{{ work.place }}</div>
              <div v-for="(responsibility, j) in work.responsibilities" :key="responsibility+i*(1+j)" class="text-black">{{ responsibility }}</div>
            </div>
      </section>
      <!-- education -->
      <section class="q-pa-md">
        <div class="section bg-primary text-secondary q-mb-md q-py-md q-px-sm">EDUCATION</div>
        <div v-for="(education,i) in educations" :key="'clase' + (1+i)" class="item q-mb-md q-px-sm">
          <div class="subtitles text-secondary q-px-none ">{{ education.place }}</div>
          <div class="text-secondary">{{ education.duration }}</div>
          <div v-for="(learning,j) in education.learnings" :key="'learning'+ learning + i*(1+j)" class="text-black">{{ learning }}</div>
        </div>
      </section>
      <!-- about me -->
      <section class="q-pa-md">
        <div class="section bg-primary text-secondary q-mb-md q-py-md q-px-sm">ABOUT ME</div>
        <div class="story text-black text-justify q-pl-sm q-pr-md">{{ myStory }}</div>
      </section>
  </span>
</template>

<script>
import WorkDone from '../components/WorkDone'
import data from './mixin';
export default {
  name: 'Mobile',
  mixins: [data],
  components: {
    WorkDone
  }
}
</script>

<style lang="scss" scoped>
h1,h2,h3 {
  margin: 0;
}

.paragraph {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 12px;
}

.my-position {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 14px;
}

.subtitles {
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: 16px;
}

.section {
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: 24px;
}

.title {
  font-weight: 900;
  font-family: 'Archivo Black', sans-serif;
  font-size: 37px;
}

.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
}
.image {
    width: 100%;
    margin-bottom: -7px;
}
</style>
