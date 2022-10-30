<script>
export default {
    props: {
        heading: { type: String, required: true, default: "How it works?" },
        content: { type: String, required: true, default: "374 Conciergerie welcomes you to become a member and have access to our services through a variety of offerings tailored to your specific needs. Once your membership is completed, you will have access to a specialized concierge who will accompany you in all of your demands." }
    }
}
</script>

<template>
    <section class="relative my-8 shadow-xl w-full flex flex-col">
        <div class=" animation-element fade-up self-center flex flex-col justify-between gap-8 text-center items-center z-10 relative bg-black bg-opacity-70 h-full py-16 px-4 sm:px-8 md:px-12 lg:px-16 text-white">
            <h1 class="text-3xl font-semibold w-full md:w-1/2">
                {{heading}}
            </h1>
            <span class="text-lg font-semibold w-full md:w-1/2">
                {{content}}
            </span>
        </div>
        <nuxt-img class="absolute w-full h-full top-0 left-0 right-0 bottom-0 object-bottom object-cover" src="/how_it_works_bg.jpg" />
    </section>
</template>