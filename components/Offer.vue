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
        class="animation-element fade-up w-72 flex flex-col text-center max-w-max gap-4 p-4 border shadow transition duration-400 mb-4 cursor-pointer">
        <nuxt-img class="h-72 object-cover rounded" :src="image_uri" />
        <h1 class="text-3xl ">
            {{header}}
        </h1>
        <!-- <h1 class="text-xl font-light">
            {{price}}$
        </h1> -->
        <h1 class="text-xl font-light">
            {{service}} service
        </h1>
        <h1 class="text-xl">Unlimited demands</h1>
    </div>
</template>