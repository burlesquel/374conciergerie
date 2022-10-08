<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data() {
        return {
            images: [
                "dentist",
                "empty-football-stadium",
                "happy-romantic-couple-moving-away-from-private-hel",
                "helicopter-flying-overhead-against-blue-sky-and-wh",
                "hotel-room-or-apartment-doorway",
                "luxurious-yacht-illuminated",
                "main-in-car",
                "restaurant",
                "young-woman-touching-turkish-lamps-for-sale-in-the"
            ]
        }
    }
}
</script>
    
<template>
    <section class="flex flex-col items-center pb-4 bg-gray-50 h-70vh sm:h-90vh w-full justify-around overflow-hidden">
        <h1
            class="animation-element fade-right text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light fade-up text-logorange text-center">
            SERVICES</h1>
        <VueSlickCarousel class="w-full flex flex-row items-center h-4/5 sm:h-3/4 sm:w-2/3" :pauseOnHover="false"
            :autoplay="true" :arrows="true" :autoplaySpeed="2000">
            <div v-for="image in images" :key="image" class=" flex items-center justify-center bg-red-300">
                <nuxt-img class="object-contain h-full w-full" :src="`/carousel/${image}.webp`" />
            </div>
        </VueSlickCarousel>
    </section>
</template>
    
<style scoped>

</style>