<template>
  <div class="row">
    <div class="col-2 q-ml-sm">
      <q-skeleton v-if="!trigger" type="circle" size="70px"/>
      <img :src="img" :alt="alt" class="icons" />
    </div>
    <div class="col q-ml-md q-mt-sm">
      <q-skeleton v-if="!trigger" type="QToolbar"/>
      <div v-else class="text-h5" style="color:white">{{ text }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["img", "text", "link", "alt", "trigger"],

};
</script>
<style scoped>
.icons {
  width: 3rem;
}
</style>