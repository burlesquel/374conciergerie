<script>
export default {
    props: {
        image: { type: String, required: true, default: "" },
        heading: { type: String, required: true, default: "" },
        content: { type: String, required: true, default: "" },
        // mode: { type: Number, require: false, default: 0 }
    }
}
</script>

<template>
    <section class="flex flex-col items-center  gap-6 p-8 m-4 bg-white shadow-lg border rounded animation-element fade-up">
        <div>
            <h1 class="text-4xl font-semibold mb-4">{{heading}}</h1>
            <p class="h-0.5 bg-black"></p>
        </div>
        <nuxt-img class="object-cover h-80 w-80 rounded shadow" :src="image" />
        <span class="text-lg w-80">{{content}}</span>
    </section>
</template>