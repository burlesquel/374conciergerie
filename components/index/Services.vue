<script>
import Service from '../Service.vue';
export default {
  components: { Service }
}
</script>

<template>
  <section class="p-12 bg-gray-50 flex flex-col items-center gap-4 w-full">

    <div>
      <h1 class="text-center text-5xl text-gray-900 m-4">Our Services</h1>
      <div class="h-0.5 bg-logorange"></div>
    </div>

    <div class="flex flex-row flex-wrap justify-around">
      <Service heading="Shopping"
        content="Find the latest handbag from a great brand or Collector model, help you find a specific item, meet a personal shopper need."
        icon_class="fa-solid fa-bag-shopping" />
      <Service heading="Travel"
        content="Travel organization, transfer, private jet, private driver, availability hotel, private house, car rental."
        icon_class="fa-solid fa-plane" />
      <!-- <Service heading="Transportation" content="Transfer, private jet, private driver, availability" icon_class="fa-solid fa-car-side  " /> -->
      <Service heading="Tickets"
        content="Purchase ticket for a football match, tennis tournament, boxing match or other sporting event. Reservation of places for concerts, shows, operas and more."
        icon_class="fa-solid fa-ticket" />
      <Service heading="Events"
        content="Organization of birthdays with privatization of a place, organization of parties with provision of a chef or caterer at home."
        icon_class="fa-solid fa-cake-candles" />
      <Service heading="Activites"
        content="Cruise, helicopter, guided tour, sports activity, thrills, or find the best for a romantic dinner with delivery of a bouquet of flowers."
        icon_class="fa-solid fa-person-running" />
      <Service heading="Daily Needs" content="Using a babysitter, or any other need."
        icon_class="fa-solid fa-clock" />
    </div>

    <NuxtLink to="/services"
      class="bg-logorange p-2 rounded hover:bg-yellow-200 transition text-lg text-white cursor-pointer">Read More
    </NuxtLink>
  </section>
</template>

<style scoped>
section {
  /* background: rgb(0, 0, 0);
  background: linear-gradient(0deg, #000000 0%, #21192f 100%); */
}
</style>
