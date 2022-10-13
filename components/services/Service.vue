<script>
export default {
    props: {
        image: { type: String, required: true, default: "" },
        heading: { type: String, required: true, default: "" },
        content: { type: String, required: true, default: "" },
        mode: { type: Number, require: false, default: 0 }
    }
}
</script>

<template>
    <section :class="{'md:flex-row bg-gray-100':mode === 0, 'md:flex-row-reverse bg-gray-50' :mode === 1}" class="flex flex-col-reverse gap-4 md:gap-0 items-center justify-around p-8 border-b">
        <nuxt-img :src="image" class="w-4/5 md:w-1/3 object-contain rounded"></nuxt-img>
        <div class="w-full md:w-1/2 flex flex-col justify-center gap-4 md:gap-8 animation-element"
            :class="{'fade-right': mode === 0, 'fade-left': mode === 1}">
            <h1 :class="{'md:text-left':mode === 0, 'md:text-right':mode===1}" class="text-4xl semibold">{{heading}}</h1>
            <p :class="{'md:text-left':mode === 0, 'md:text-right':mode===1}">{{content}}</p>
        </div>
    </section>
</template>