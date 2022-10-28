<script>
export default {
    props: {
        header: { required: true, type: String },
        price: { required: true, type: Number },
        service: { required: true, type: String },
        seven_twentyfour: { required: false, default:false, type: Boolean },
        image_uri: { required: true, type: String }
    }
}
</script>

<template>
    <div
        class="animation-element fade-up w-72 flex flex-col items-center text-center max-w-max gap-4 p-4 border shadow transition duration-400 mb-4 cursor-pointer bg-gray-50 hover:bg-gray-100">
        <nuxt-img class="h-72 object-cover rounded" :src="image_uri" />
        <h1 class="text-3xl font-semibold">
            {{header}}
        </h1>
        <span class="w-1/2 h-px bg-black"></span>
        <h1 class="text-xl">
            {{service}}
        </h1>
        <h1 class="text-xl" v-if="seven_twentyfour">{{$t('index').offers.seven_twentyfour}}</h1>
        <h1 class="text-xl">{{$t('index').offers.dedicated_concierge}}</h1>
        <h1 class="text-xl">{{$t('index').offers.unlimited_requests}}</h1>
    </div>
</template>