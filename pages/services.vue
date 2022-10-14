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
                { image: "/carousel/helicopter-flying-overhead-against-blue-sky-and-wh.webp", heading: "Activities", content: "We manage your activities throughout your stay, enjoy unique addresses, the greatest travel ideas, and most importantly, peace of mind.", mode: 1 },
                { image: "/carousel/luxurious-yacht-illuminated.webp", heading: "Yacht", content: "Istanbul is a one-of-a-kind metropolis because to the Bosphorus, which runs through it. What could be more magnificent than having breakfast, spending the day or evening aboard a private yacht just you?", mode: 0 },
                { image: "/carousel/main-in-car.webp", heading: "Cars", content: "Enjoy a vehicle for your travels, a family automobile, a comfort sedan, or the sports car of your desires.", mode: 1 },
                { image: "/carousel/young-woman-touching-turkish-lamps-for-sale-in-the.webp", heading: "Shopping", content: "We're looking for the most unique things for your wardrobe. We also provide a personal shopper for your shopping trips.", mode: 0 },
                { image: "/carousel/hotel-room-or-apartment-doorway.webp", heading: "Hotels", content: "Take advantage of the greatest hotels. We plan your stay with solutions tailored to your needs and pick the most renowned establishments for you.", mode: 1 },
                { image: "/carousel/dentist.webp", heading: "Medical", content: "We link our customers with the top clinics for all forms of treatment, including hair transplant, rhinoplasty, beard transplant, dental care, and much more...", mode: 0 },
                { image: "/carousel/empty-football-stadium.webp", heading: "Access", content: "We supply you with tickets to the finest events, whether it is a football match in a unique environment in the globe, a concert, or an opera.", mode: 1 },
                { image: "/carousel/aircraft-plane-boarding-passengers-in-airport-term.webp", heading: "Travel", content: "For your convenience, our concierges will plan your journey. You may also book private flights from anywhere in the world.", mode: 0 },
                { image: "/carousel/main-in-car.webp", heading: "Transportation", content: "Private driver, airport transfer, private van, or everyday travel, we reserve your travels whenever and wherever you choose.", mode: 1 },
                { image: "/carousel/restaurant.webp", heading: "Restaurant", content: "We find the most exquisite tables for sumptuous and unforgettable occasions.", mode: 0 }
            ]
        }
    }
}
</script>

<template>
    <Animatable >
        <div class="flex flex-row flex-wrap w-full justify-evenly bg-gray-50 p-4">
            <Landing />
        <Service v-for="service of services" :key="service.heading" :image="service.image" :heading="service.heading"
            :content="service.content" :mode="service.mode" />
        </div>
        <ReachUsForm/>
    </Animatable>
</template>