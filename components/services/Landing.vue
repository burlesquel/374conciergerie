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
                "airplane",
                "car_inside",
                "cars",
                "dentist", "girl_laying_aganist_landscape", "helicopter", "restaurant", "shopping", "soccer", "yacht_under_bridge"
            ],
            currentImage: "helicopter",
            screenSize: {
                width: window.innerWidth,
                height: window.innerHeight
            },
        }
    },
    methods:{
        handleResize() {
            this.screenSize.width = window.innerWidth
            this.screenSize.height = window.innerHeight
        }
    },
    beforeMount() {
        window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
    },
    mounted() {
        const limit = this.images.length
        let current = 0
        const interval = setInterval(() => {
            if (current === limit) {
                current = 0
            }
            this.currentImage = this.images[current]
            current = current + 1
        }, 2000)
    }
}
</script>
    
    
<template>
    <section class="relative bg-gray-50 h-70vh sm:h-90vh w-full overflow-hidden">
        <div
            class="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 z-10">
            <span class=" animation-element w-full text-5xl 
            sm:text-6xl md:text-7xl lg:text-8xl font-light fade-up text-white">
                {{$t('services').landing}}</span>
        </div>
        <video ref="video" v-if="screenSize.width > 640"
            class="relative h-full w-full bg-gray-300 object-cover object-bottom" autoplay muted playsinline loop
            id="myVideo">
            <source src="~/assets/about_video.webm" type="video/webm">
        </video>
        <nuxt-img v-if="screenSize.width < 640" class="object-cover h-full w-full" :src="`/carousel/${currentImage}.png`" />
    </section>
</template>

    

    
