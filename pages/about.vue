<script>
import Animatable from '../components/animation/animatable.vue';
import Landing from '../components/about/Landing.vue';
import WhoAreWe from '../components/about/WhoAreWe.vue';
import Advantages from '../components/about/Advantages.vue';
import ReachUsForm from '../components/ReachUsForm.vue';
export default {
    head() {
        const locale_meta = this.$nuxtI18nHead({ addSeoAttributes: true }).meta
        return {
            title: this.$t('about').meta.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$t('about').meta.description
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    keywords: this.$t('about').meta.keywords
                },
                ...locale_meta
            ]
        }
    },
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