<script>
import Offer from '../Offer.vue';
export default {
    components: {
        Offer
    }
}
</script>

<template>
    <section class="flex flex-col p-4 gap-8 items-center bg-gray-100">
        <div>
            <h1 class="text-center text-5xl text-gray-900 m-4">Offers</h1>
            <div class="h-0.5 bg-logorange"></div>
        </div>
        <div class="flex flex-row justify-evenly w-full flex-wrap">
            <Offer header="Daily" image_uri="/sea-voyage-to-bosphorus-strait.webp" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam id vitae illo quam ipsa odio necessitatibus deleniti saepe ut animi!"/>
            <Offer header="Weekend" image_uri="/beautiful-travaler-with-backpack-on-the-platform.webp" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam id vitae illo quam ipsa odio necessitatibus deleniti saepe ut animi!"/>
            <Offer header="Weekly" image_uri="/business-people-arriving-at-hotel.webp" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam id vitae illo quam ipsa odio necessitatibus deleniti saepe ut animi!"/>
            <Offer header="Custom" image_uri="/top-view-of-workplace-woman-marks-dates-on-calenda.webp" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam id vitae illo quam ipsa odio necessitatibus deleniti saepe ut animi!"/>
            
        </div>
    </section>
</template>