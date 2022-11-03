<script>
import Animatable from '../components/animation/animatable.vue';
import Header from '../components/contact/header.vue'
import ReachUsForm from '../components/ReachUsForm.vue';
export default{
    components:{
    Animatable,
    Header,
    ReachUsForm
}
}
</script>

<template>
    <Animatable>
        <Header/>
        <ReachUsForm/>
    </Animatable>
</template>