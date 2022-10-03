<script>
import Landing from '../components/index/Landing.vue';
import Services from '../components/index/Services.vue';
import Introduction from '../components/index/Introduction.vue';
import Offers from '../components/index/Offers.vue';

export default {
  components: { Landing, Services, Introduction, Offers }
}
</script>

<template>
  <div>
    <Landing />
    <Introduction />
    <Services />
    <Offers/>
  </div>
</template>

<style scoped>

</style>
