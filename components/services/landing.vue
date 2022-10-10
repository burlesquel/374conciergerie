<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
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
            ],
            currentImage:"dentist"
        }
    },
    mounted(){
        const limit = this.images.length
        let current = 0
        const interval = setInterval(()=>{
            if(current === limit){
                current = 0
            }
            this.currentImage = this.images[current]
            current = current + 1
        },2000)
    },
}
</script>
    
<template>
    <section class="relative bg-gray-50 h-70vh sm:h-90vh w-full overflow-hidden">
        <div
            class="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-30 z-10">
            <span class=" animation-element w-full text-5xl 
            sm:text-6xl md:text-7xl lg:text-8xl font-light fade-up text-white">
                SERVICES</span>
        </div>
        <nuxt-img class="object-cover h-full w-full" :src="`/carousel/${currentImage}.webp`" />
    </section>
</template>
    
<style scoped>

</style>