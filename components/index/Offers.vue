<script>
import Offer from '../Offer.vue';
export default {
    components: {
        Offer
    }
}
</script>
    
<template>
    <section class="flex flex-col p-4 gap-8 items-center bg-gray-100 w-full">
        <div>
            <h1 class="text-center text-5xl text-gray-900 m-4">Adhesion</h1>
            <div class="h-0.5 bg-logorange"></div>
        </div>
        <div class="flex flex-row justify-evenly w-full flex-wrap">
            <Offer image_uri="/sea-voyage-to-bosphorus-strait.webp" header="One Day" :price="50" service="24 hours"
                 />
            <Offer image_uri="/beautiful-travaler-with-backpack-on-the-platform.webp" header="Weekend" :price="90"
                service="3 days " />
            <Offer image_uri="/business-people-arriving-at-hotel.webp" header="1 Week" :price="150" service="7 days"
               />
            <Offer image_uri="/top-view-of-workplace-woman-marks-dates-on-calenda.webp" header="1 Month" :price="350"
                service="1 month"/>

        </div>
    </section>
</template>