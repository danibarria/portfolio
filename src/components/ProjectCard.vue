<template>
  <q-card class="card col-md-3 col-sm-12 col-xs-11">
    <q-parallax
      :speed="0.8"
    >
      <template v-slot:media>
        <slot name="parallax"></slot>
      </template>
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
// * {
//   color: #00004F;
// }

@media only screen and (max-width: 600px) {
  .card {
    // width: 20%;
  }
}
</style>
