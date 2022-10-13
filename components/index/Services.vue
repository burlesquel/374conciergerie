<script>
import Service from '../Service.vue';
import SectionHeader from '../SectionHeader.vue';
export default {
  components: { Service, SectionHeader }
}
</script>

<template>
  <section class="p-12 bg-gray-50 flex flex-col items-center gap-4 w-full">

    <SectionHeader text="Discover Our Services"/>

    <div class="flex flex-row flex-wrap justify-around">
      <Service heading="Shopping"
        content="Find the latest handbag from a great brand or Collector model, help you find a specific item, meet a personal shopper need."
        icon_class="fa-solid fa-bag-shopping" />
      <Service heading="Travel"
        content="Travel organization, hotel, private house, car rental, airport transfer, private jet, private driver, availability..."
        icon_class="fa-solid fa-plane" />
      <!-- <Service heading="Transportation" content="Transfer, private jet, private driver, availability" icon_class="fa-solid fa-car-side  " /> -->
      <Service heading="Ticketing"
        content="Tickets for a football match, tennis tournament, boxing match or other sporting event. Reservation of places for concerts, shows, operas…"
        icon_class="fa-solid fa-ticket" />
      <Service heading="Events"
        content="Organization of birthdays with privatization of a place, organization of parties with provision of a chef or caterer at home..."
        icon_class="fa-solid fa-cake-candles" />
      <Service heading="Activites"
        content="Cruise, helicopter, guided tour, sports activity, thrills, or find the best for a romantic dinner with delivery of a bouquet of flowers."
        icon_class="fa-solid fa-person-running" />
      <Service heading="Daily Service" content="Phone plan, transportation card, babysitter, or any other need..."
        icon_class="fa-solid fa-clock" />
    </div>

    <NuxtLink to="/services"
      class="bg-logorange p-2 rounded hover:bg-yellow-200 transition text-lg text-white cursor-pointer">Read More
    </NuxtLink>
  </section>
</template>

<style scoped>

</style>
