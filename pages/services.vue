<script>
import Animatable from '../components/animation/animatable.vue';
import Service from '../components/services/Service.vue';
import ReachUsForm from '../components/ReachUsForm.vue'
import Landing from '../components/services/Landing.vue';
export default {
    components: { Animatable, Landing, Service, ReachUsForm },
    data() {
        return {
            services: [
                { image: "/carousel/helicopter-flying-overhead-against-blue-sky-and-wh.webp", heading: "Activities", content: "Lorem ipsum asdbaskhdwqkn", mode: 1 },
                { image: "/carousel/luxurious-yacht-illuminated.webp", heading: "Yacht", content: "Lorem ipsum asdbaskhdwqkn", mode: 0 },
                { image: "/carousel/main-in-car.webp", heading: "Cars", content: "Lorem ipsum asdbaskhdwqkn", mode: 1 },
                { image: "/carousel/young-woman-touching-turkish-lamps-for-sale-in-the.webp", heading: "Shopping", content: "Lorem ipsum asdbaskhdwqkn", mode: 0 },
                { image: "/carousel/hotel-room-or-apartment-doorway.webp", heading: "Hotels", content: "Lorem ipsum asdbaskhdwqkn", mode: 1 },
                { image: "/carousel/dentist.webp", heading: "Medical", content: "Lorem ipsum asdbaskhdwqkn", mode: 0 },
                { image: "/carousel/empty-football-stadium.webp", heading: "Access", content: "Lorem ipsum asdbaskhdwqkn", mode: 1 },
                { image: "/carousel/aircraft-plane-boarding-passengers-in-airport-term.webp", heading: "Travel", content: "Lorem ipsum asdbaskhdwqkn", mode: 0 },
                { image: "/carousel/main-in-car.webp", heading: "Transportation", content: "Lorem ipsum asdbaskhdwqkn", mode: 1 },
                { image: "/carousel/restaurant.webp", heading: "Restaurant", content: "Lorem ipsum asdbaskhdwqkn", mode: 0 }
            ]
        }
    }
}
</script>

<template>
    <Animatable>
        <Landing />
        <Service v-for="service of services" :key="service.heading" :image="service.image" :heading="service.heading"
            :content="service.content" :mode="service.mode" />
        <ReachUsForm/>
    </Animatable>
</template>