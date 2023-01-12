<template>
  <article>
    <img class="image" :src="getImg()" :alt="title">
    <div class="q-pa-sm bg-primary">
      <div class="text-secondary subtitles">{{ title }}</div>
      <div class="text-white">{{ description }}</div>
    </div>
  </article>
</template>

<script>
export default {
  props:['title', 'description', 'imgName'],
  methods: {
    getImg() {
      return require(`../assets/${this.imgName}`);
    }
  }
}
</script>

<style>
.image {
    width: 100%;
    margin-bottom: -7px;
}
</style>
