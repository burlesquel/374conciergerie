<script>
import Service from '../Service.vue';
export default {
  components: { Service }
}
</script>

<template>
  <section class="p-12 bg-gray-50 flex flex-col items-center gap-4">

    <div>
      <h1 class="text-center text-5xl text-gray-900 m-4">Our Services</h1>
      <div class="h-0.5 bg-logorange"></div>
    </div>

    <div class="flex flex-row flex-wrap justify-around">
      <Service heading="Shopping" icon_class="fa-solid fa-bag-shopping" />
      <Service heading="Travel" icon_class="fa-solid fa-plane" />
      <Service heading="Transportation" icon_class="fa-solid fa-car-side  " />
      <Service heading="Medical" icon_class="fa-solid fa-tooth" />
      <Service heading="Activites" icon_class="fa-solid fa-person-running" />
      <Service heading="Acommodation" icon_class="fa-solid fa-house" />
    </div>
  </section>
</template>

<style scoped>
section {
  /* background: rgb(0, 0, 0);
  background: linear-gradient(0deg, #000000 0%, #21192f 100%); */
}
</style>
