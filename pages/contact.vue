<script>
import Animatable from '../components/animation/animatable.vue';
import Header from '../components/contact/header.vue'
import ReachUsForm from '../components/ReachUsForm.vue';
export default {
    components: {
        Animatable,
        Header,
        ReachUsForm
    },
    head() {
        const locale_meta = this.$nuxtI18nHead({ addSeoAttributes: true }).meta
        return {
            title: this.$t('contact').meta.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$t('contact').meta.description
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    keywords: this.$t('contact').meta.keywords
                },
                ...locale_meta
            ]
        }
    },
}
</script>

<template>
    <Animatable>
        <Header />
        <ReachUsForm />
    </Animatable>
</template>