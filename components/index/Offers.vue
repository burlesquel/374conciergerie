<script>
import Offer from '../Offer.vue';
import SectionHeader from '../SectionHeader.vue';
export default {
    components: {
    Offer,
    SectionHeader
}
}
</script>
    
<template>
    <section class="flex flex-col p-4 gap-8 items-center bg-white w-full">
        <SectionHeader text="Adhesion"/>
        <div class="flex flex-row justify-evenly w-full flex-wrap">
            <Offer image_uri="/sea-voyage-to-bosphorus-strait.webp" header="Silver" :price="50" service="24 hours"
                 />
            <Offer image_uri="/beautiful-travaler-with-backpack-on-the-platform.webp" header="Gold" :price="90"
                service="3 days " />
            <Offer image_uri="/business-people-arriving-at-hotel.webp" header="Platinum" :price="150" service="7 days"
               />
            <Offer image_uri="/top-view-of-workplace-woman-marks-dates-on-calenda.webp" header="Diamond" :price="350"
                service="1 month"/>

        </div>
    </section>
</template>