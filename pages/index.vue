<script>
import Landing from '../components/index/Landing.vue';
import Services from '../components/index/Services.vue';
import Introduction from '../components/index/Introduction.vue';
import Offers from '../components/index/Offers.vue';
import Animatable from '../components/animation/animatable.vue';
export default {
  components: { Landing, Services, Introduction, Offers, Animatable },

}
</script>

<template>
  <Animatable>
    <Landing />
    <Introduction />
    <Services />
    <Offers />
  </Animatable>
</template>

<style scoped>

</style>
