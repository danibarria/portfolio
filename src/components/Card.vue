<template>
  <span>
    <div class="subtitles text-secondary q-px-none">{{ title }}</div>
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: ['title']

}
</script>

<style>

</style>
