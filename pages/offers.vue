<script>
import Animatable from '../components/animation/animatable.vue';
import Landing from '../components/offers/Landing.vue';
import Offers from '../components/offers/offers.vue';
import ReachUs from '../components/ReachUsForm.vue';
export default{
    components:{ Animatable, Landing, Offers, ReachUs }
}
</script>

<template>
    <Animatable>
        <Landing/>
        <Offers/>
        <ReachUs/>
    </Animatable>
</template>