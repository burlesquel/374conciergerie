<script>
import Animatable from '../components/animation/animatable.vue';
import Landing from '../components/faq/Landing.vue';
import QandA from '../components/faq/QandA.vue';
import ReachUsForm from '../components/ReachUsForm.vue';

export default {
  components: { Animatable, Landing, QandA, ReachUsForm },
  head() {
    const locale_meta = this.$nuxtI18nHead({ addSeoAttributes: true }).meta
    return {
      title: this.$t('faq').meta.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('faq').meta.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('faq').meta.keywords
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
    <QandA :qas="$t('faq').faqs"/>
    <ReachUsForm />
  </Animatable>
</template>