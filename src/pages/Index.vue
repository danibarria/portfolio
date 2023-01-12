<template>
  <div>
    <mobile v-if="$q.screen.xs || $q.screen.sm" />
    <desktop v-else />
  </div>

</template>

<script>
// import ProjectCard from "components/ProjectCard";
import Desktop from './desktop';
import Mobile from './mobile';
export default {
  name: 'PageIndex',
  components:{
    Desktop,
    Mobile
  },
  computed:{
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>

</style>
