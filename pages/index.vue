<script>
import Landing from '../components/index/Landing.vue';
import Services from '../components/index/Services.vue';
import Introduction from '../components/index/Introduction.vue';
import Offers from '../components/index/Offers.vue';
import Animatable from '../components/animation/animatable.vue';
import ReachUsForm from '../components/ReachUsForm.vue';
import ShortDescription from '../components/ShortDescription.vue';
export default {
  components: { Landing, Services, Introduction, Offers, Animatable, ReachUsForm, ShortDescription},

}
</script>

<template>
  <Animatable>
    <Landing />
    <Introduction />
    <Services />
    <ShortDescription heading="How it works?" content="374 Conciergerie welcomes you to become a member and have access to our services through a variety of offerings tailored to your specific needs. Once your membership is completed, you will have access to a specialized concierge who will accompany you in all of your demands."/>
    <Offers />
    <ReachUsForm/>
  </Animatable>
</template>

<style scoped>

</style>
