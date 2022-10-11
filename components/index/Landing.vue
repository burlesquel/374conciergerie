<script>

export default {
    data() {
        return {
            screenSize: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
    },
    methods: {
        handleResize() {
            this.screenSize.width = window.innerWidth
            this.screenSize.height = window.innerHeight
        }
    },
    beforeMount() {
        window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
    }
}
</script>

<template>
    <section class="relative w-full bg-gray-100">
        <!-- <Header /> -->
        <video v-if="screenSize.width > 640"
            class="hidden sm:flex h-screen w-full z-1 bg-gray-300 object-cover object-center absolute left-0 right-0 top-0 bottom-0"
            autoplay muted loop playsinline id="myVideo">
            <source src="~/assets/entrance_video.mp4" type="video/mp4">
        </video>
        <nuxt-img v-if="screenSize.width < 640"
            class="h-screen w-full z-1 flex sm:hidden object-cover object-center absolute left-0 right-0 top-0 bottom-0"
            src="/landing_image.png" />
        <main class="w-full h-screen flex relative flex-col">


            <div class=" h-full z-1 text-white flex items-start flex-col justify-around p-8 ">
                <div class="flex w-2/3 flex-col gap-8">
                    <h1 class="heading text-5xl sm:text-6xl md:text-7xl bold">374 Conciergerie: Your personal concierge service in Istanbul.</h1>
                    <h2 class="subheading text-2xl sm:text-3xl md:text-4xl bold">
For a few days or a long time, for vacation or work, 374 Conciergerie makes your life easier.
</h2>
                </div>
                <button class="text-2xl p-2 bg-yellow-600 inline text-gray-900 rounded">Book now</button>
            </div>
        </main>
    </section>
</template>

<style scoped>

</style>
