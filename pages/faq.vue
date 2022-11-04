<script>
import Animatable from '../components/animation/animatable.vue';
import Landing from '../components/faq/Landing.vue';
import QandA from '../components/faq/QandA.vue';
import ReachUsForm from '../components/ReachUsForm.vue';

export default {
    components: { Animatable, Landing, QandA, ReachUsForm }
}
</script>

<template>
    <Animatable>
        <Landing/>
        <QandA/>
        <ReachUsForm/>
    </Animatable>
</template>