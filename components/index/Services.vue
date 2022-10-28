<script>
import Service from '../Service.vue';
import SectionHeader from '../SectionHeader.vue';
export default {
  components: { Service, SectionHeader }
}
</script>

<template>
  <section class="p-12 bg-gray-50 flex flex-col items-center gap-4 w-full">

    <SectionHeader :text="$t('index').services.header"/>

    <div class="flex flex-row flex-wrap justify-around">
      <Service v-for="service in $t('index').services.services" :heading="service.header"
        :content="service.content"
        icon_class="fa-solid fa-bag-shopping" 
        :key="service.header"/>
    </div>

    <NuxtLink :to="localePath('/services')"
      class="bg-logorange p-2 rounded hover:bg-yellow-200 transition text-lg text-white cursor-pointer">Read More
    </NuxtLink>
  </section>
</template>

<style scoped>

</style>
