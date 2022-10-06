<script>
import TypeWriter from '../TypeWriter.vue';
export default {
    components: { TypeWriter }
}
</script>

<template>
    <section
        class="flex flex-col md:flex-row justify-around items-center text-black bg-gray-100 w-full p-8 gap-4 md:gap-0 border-b">
        <nuxt-img class="animation-element fade-left w-full md:w-1/2 object-contain rounded shadow-lg"
            src="/water-trip-at-night.webp" />
        <div
            class="animation-element fade-right w-full md:w-1/2 p-2 md:p-8 flex flex-col gap-8 justify-center font-light">
            <h1 class="text-5xl ">Travel
                <TypeWriter class="text-yellow-800" :speed="100" :delay="500"
                    :words='["exclusively", "privileged", "first-class"]' />
            </h1>
            <p class="text-xl"> 374 Conciergerie's goal is to allow its members to travel in peace. You intend to visit
                Turkey, enjoy first-class service and let our concierges handle your requests from the most basic to the
                most complex. We create a completely personalized service for you based on your preferences. Our
                concierges handpick the best providers to make your trip one-of-a-kind and unforgettable.
            </p>
            <p class="text-xl">
                <bold class="font-semibold">The advantages of 374 Conciergerie</bold> <br/>
            - A one-of-a-kind bespoke service in your picture<br/>
            - The availability: Our concierges are available to you 24 hours a day, seven days a week. <br/>
            - Optimizing your personal time <br/>
            - Sharing our best addresses <br/>
            - The VIP treatment <br/>
            </p>




        </div>
    </section>
</template>

<style scoped>
section {
    /* background: rgb(0, 0, 0);
  background: linear-gradient(0deg, #21192f 0%, #18151D 100%); */
}
</style>