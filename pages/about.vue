<script>
import Animatable from '../components/animation/animatable.vue';
import Landing from '../components/about/Landing.vue';
import WhoAreWe from '../components/about/WhoAreWe.vue';
import Advantages from '../components/about/Advantages.vue';
import ReachUsForm from '../components/ReachUsForm.vue';
export default {
    components: { Animatable, Landing, WhoAreWe, Advantages, ReachUsForm }
}
</script>

<template>
    <Animatable>
        <Landing />
        <WhoAreWe />
        <Advantages />
        <ReachUsForm />
    </Animatable>
</template>