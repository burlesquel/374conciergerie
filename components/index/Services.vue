<script>
import Service from '../Service.vue';
export default {
  components: { Service }
}
</script>

<template>
  <section class="p-12">
    <h1 class="text-center text-5xl text-white pb-8">Our Services</h1>
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

<style>
section {
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 1, 22, 1) 100%);
}
</style>
