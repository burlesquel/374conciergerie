<script>
import Animatable from '../components/animation/animatable.vue';
import Service from '../components/services/Service.vue';
import ReachUsForm from '../components/ReachUsForm.vue'
import Landing from '../components/services/Landing.vue';
export default {
    components: { Animatable, Landing, Service, ReachUsForm },
    head() {
        const locale_meta = this.$nuxtI18nHead({ addSeoAttributes: true }).meta
        return {
            title: this.$t('services').meta.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$t('services').meta.description
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    keywords: this.$t('services').meta.keywords
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
        <section class="flex flex-row flex-wrap text-center w-full justify-evenly bg-gray-50 p-4">
            <Service v-for="service of $t('services').services" :key="service.heading" :image="service.image"
                :heading="service.heading" :content="service.content" :mode="service.mode" />
        </section>
        <ReachUsForm />
    </Animatable>
</template>