<script>
import Animatable from '../components/animation/animatable.vue';
import Landing from '../components/offers/Landing.vue';
import Offers from '../components/offers/offers.vue';
import ReachUs from '../components/ReachUsForm.vue';
export default {
    components: { Animatable, Landing, Offers, ReachUs },
    head() {
        const locale_meta = this.$nuxtI18nHead({ addSeoAttributes: true }).meta
        return {
            title: this.$t('offers').meta.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$t('offers').meta.description
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.$t('offers').meta.keywords
                },
                ...locale_meta
            ]
        }
    },
}
</script>

<template>
    <Animatable>
        <Landing />
        <Offers />
        <ReachUs />
    </Animatable>
</template>