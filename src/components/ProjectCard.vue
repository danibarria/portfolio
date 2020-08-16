<template>
  <q-card class="my-card">
    <q-parallax
      :src="img"
      :speed="0.9"
      :height="300"
    >

    </q-parallax>
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
      <div class="text-subtitle2">{{ description }}</div>
    </q-card-section>
    <q-card-section class="technologies">
      {{ technologies }}
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name:'ProjectCard',
  props:['img', 'title', 'description', 'technologies']
}
</script>

<style lang="scss" scoped>
* {
  color: #00004F;
}
</style>
