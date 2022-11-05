<script>
import Adhesion from './../Adhesion.vue'
export default {
    components: { Adhesion }
}
</script>

<template>

    <section class="flex flex-col items-center bg-white w-full">
        
        <div class="">
            <h1 class="text-7xl font-semibold text-center p-8">{{$t('offers').heading}}</h1>
            <div class="w-full h-0.5 bg-black"></div>
        </div>
        <div class="w-full  p-8 flex flex-row flex-wrap gap-4 justify-around">
            <Adhesion v-for="offer in $t('offers').offers"
            :heading="offer.name"
            :price="offer.price"
            :duration="offer.duration"
            :contact_url="offer.contact_url"
            :key="offer.price"
            
            />
        </div>
    </section>
</template>