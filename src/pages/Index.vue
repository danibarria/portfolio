<template>
  <div>
    <div class="row q-mt-sm flex-center">
      <q-skeleton dark v-if="!imagenPerfilCargada" type="circle" size="250px" />
      <q-avatar :style="estilos" class="border-image" size="250px">
        <img src="../assets/foto-cara.jpeg" alt="miCara" @load="cargado"  />
      </q-avatar>
    </div>

    <div class="row q-mt-sm">
      <div class="col">
        <div class="text-center text-h6 text-white">25 Años,</div>
        <div class="text-center text-h6 text-white">Argentino,</div>
        <div class="text-center text-h6 text-white">Fullstack Developer</div>
      </div>
    </div>

    <div class="row q-mt-xl">
      <div class="col">
        <div class="text-center text-h5"> Mis proyectos</div>
      </div>
    </div>

    <div class="row justify-center">
      <div class="col-10">
        <project-card title="Dematec" description="Landing Page" technologies="HTML, CSS, JS" img="https://cdn.quasar.dev/img/parallax2.jpg" />
        <project-card title="Dinodev" description="Landing Page" technologies="HTML, CSS, JS" img="https://cdn.quasar.dev/img/parallax2.jpg" />
        <project-card title="Mef Replicas" description="Web" technologies="Nodejs, Handlebars" img="https://cdn.quasar.dev/img/parallax2.jpg" />
        <project-card title="CardFolder" description="Web" technologies="PHP, Vuejs, Quasar Framework, SSR" img="https://cdn.quasar.dev/img/parallax2.jpg" />
        <project-card title="Compras Cooperativas" description="Web" technologies="PHP, Vuejs, Quasar Framework" img="https://cdn.quasar.dev/img/parallax2.jpg" />
        <project-card title="Probacodigos" description="Blog" technologies="Wordpress" img="https://cdn.quasar.dev/img/parallax2.jpg" />
        <project-card title="Rick & Morty character picker" description="Web" technologies="Quasar framework" img="https://cdn.quasar.dev/img/parallax2.jpg" />
        <project-card title="Simple Pomodoro" description="PWA, Web" technologies="Progressive Web Application (PWA)" img="https://cdn.quasar.dev/img/parallax2.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "components/ProjectCard";
export default {
  name: 'PageIndex',
  components:{
    ProjectCard
  },
  mounted(){
    const clientId = '589081794697-jbvph3a9npgan3skb0of7rcvcon3e82s.apps.googleusercontent.com'
    const secret = 'Ndu6vVmah4bcCsr_V5QteaVs'
    const blogId = '7819320003801677568'
    const apiKey = 'AIzaSyC6WbM-N2FcHNqkwWuQqtZFQO2x1PzXzUk'
    this.$axios.get(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`).then(succ=>{
      console.log(succ)
    }).catch(err =>{
      console.log(err)
    })
  },
  data(){
    return {
      loading : true,
      loadedImages: false,
      styles:'display:none'
    }
  },
  computed:{
    cargando(){
      return this.loading
    },
    estilos(){
      return this.styles
    },
    imagenPerfilCargada(){
      return this.loadedImages
    },
    linkedIn(){
      return logoLinkedIn
    },
    gmail(){
      return logoGmail
    }
  },
  methods:{
    cargado(){
      setTimeout(() => {
        this.loadedImages = true
        this.styles ='display:block'
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.text-h5 {
  color: white;
}
.second-self-color {
  color:#ff7357
}

.my-card {
  margin: 10px 0 10px 0;
}

.technologies {
  padding-top: 0;
}
</style>
