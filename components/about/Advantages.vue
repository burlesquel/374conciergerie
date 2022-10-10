<script>
import Advantage from '../Advantage.vue';
export default{
    components:{ Advantage }
}
</script>
<template>
<section class="w-full bg-gray-100 text-center flex flex-col items-center p-4">
    <div>
        <h1 class="font-semibold text-5xl mb-4">Why choose us?</h1>
    <div class="w-full h-px bg-logorange"></div>
    </div>
    <div class="w-full flex flex-row flex-wrap">
        <Advantage heading="Unique Service" content="A one-of-a-kind bespoke service in your picture." icon_class="fa-solid fa-diamond"/>
        <Advantage heading="Availability" content=" Our concierges are available to you 24 hours a day, seven days a week." icon_class="fa-regular fa-clock"/>
        <Advantage heading="Personalization" content="Optimizing your personal time." icon_class="fa-solid fa-person"/>
        <Advantage heading="Exclusive" content="Sharing our best addresses along with the VIP treatment" icon_class="fa-regular fa-gem"/>
    </div>
</section>
</template>