<script>
import Landing from '../components/index/Landing.vue';
import Services from '../components/index/Services.vue';
import Introduction from '../components/index/Introduction.vue';

export default {
  components: { Landing, Services, Introduction }
}
</script>

<template>
  <div>
    <Landing />
    <Introduction />
    <Services />
  </div>
</template>

<style scoped>

</style>
