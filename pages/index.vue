<script>
import Landing from '../components/index/Landing.vue';
import Services from '../components/index/Services.vue';
import Introduction from '../components/index/Introduction.vue';
import Offers from '../components/index/Offers.vue';
import Animatable from '../components/animation/animatable.vue';
import ReachUsForm from '../components/ReachUsForm.vue';
import ShortDescription from '../components/ShortDescription.vue';
export default {
  head() {
    const locale_meta = this.$nuxtI18nHead({ addSeoAttributes: true }).meta
    return {
      title: this.$t('index').meta.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('index').meta.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('index').meta.keywords
        },
        ...locale_meta
      ]
    }
  },
  components: { Landing, Services, Introduction, Offers, Animatable, ReachUsForm, ShortDescription },

}
</script>

<template>
  <Animatable>
    <Landing />
    <Introduction />
    <Services />
    <ShortDescription :heading="$t('index').how_it_works.heading" :content="$t('index').how_it_works.content" />
    <Offers />
    <ReachUsForm />
  </Animatable>
</template>

<style scoped>

</style>
