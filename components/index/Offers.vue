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
        <SectionHeader text="Offers" />
        <div class="flex flex-row justify-evenly w-full flex-wrap">
            <Offer image_uri="/silver.png" header="Silver" :price="50" service="24 hours" />
            <Offer image_uri="/gold.png" header="Gold" :price="90"
                service="3 days" :seven_twentyfour="true" />
            <Offer image_uri="/platinum.png" header="Platinum" :price="150" service="7 days"
                :seven_twentyfour="true" />
            <Offer image_uri="/diamond.png" header="Diamond" :price="350"
                service="1 month" :seven_twentyfour="true" />

        </div>
    </section>
</template>