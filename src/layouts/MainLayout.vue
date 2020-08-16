<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="second-self-color">
        <q-btn flat round dense icon="menu" class="q-mr-sm" @click="drawerLeft = !drawerLeft" />
        <q-toolbar-title>Dani Barría</q-toolbar-title>
        <q-btn flat round dense icon="whatshot" />
      </q-toolbar>
    <q-drawer
        v-model="drawerLeft"
        show-if-above
        :width="240"
        :breakpoint="700"
        elevated
        content-class="second-self-color text-white"
      >
        <q-scroll-area class="fit">
          <div class="q-pa-sm">
            <q-item clickable v-ripple>
        <q-item-section>Links Útiles para Contartarme</q-item-section>
      </q-item>
            <EssentialLink title="Mi Blog" caption="Programación y desafios" link="https://www.probacodigos.com.ar" icon="code" />
            <EssentialLink title="Platzi" caption="Fijate lo que estoy aprendiendo" link="https://platzi.com/@danijazzero/" icon="school" />
            <EssentialLink title="Email" caption="Contactame!" link="mailto:me@danibarria.com.ar?Subject=Contacto" icon="email" />
            <EssentialLink title="LinkedIn" caption="Contratame!" link="https://www.linkedin.com/in/jose-daniel-barria-reyes-510511159/" icon="work" />
          </div>
        </q-scroll-area>
      </q-drawer>    
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
      <q-footer style="background-color:#2b2b2b" elevated>
        <q-toolbar>
          <q-toolbar-title class="text-center" @click="drawerLeft = !drawerLeft">Contactame!</q-toolbar-title>
        </q-toolbar>
      </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from '../components/EssentialLink'
export default {
  name: "MainLayout",
  components:{
    EssentialLink
  },
  data() {
    return {
      drawerLeft:false
    };
  }
};
</script>
<style>
body {
  background-color: #1a1a1a;
}
.second-self-color {
  background-color:#ff7357
}
</style>