<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from '../components/EssentialLink'
export default {
  name: "MainLayout",
  components:{
    // EssentialLink
  },
  data() {
    return {
      drawerLeft:false
    };
  }
};
</script>
<style>
</style>
