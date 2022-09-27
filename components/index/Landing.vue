<script>

export default {
    beforeMount() {
        window.addEventListener('resize', this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleScroll)
    }
}
</script>
      
<template>
    <div>
        <!-- <Header /> -->
        <video style="height: 100vh; width:100vw; z-index:-1"
            class="hidden sm:flex bg-gray-300 object-cover object-center absolute left-0 right-0 top-0 bottom-0" autoplay muted loop
            id="myVideo">
            <source src="~/assets/entrance_video.mp4" type="video/mp4">
        </video>
        <nuxt-img class="h-full flex sm:hidden object-cover object-center absolute left-0 right-0 top-0 bottom-0" src="/landing_image.webp"/>
        <main class="w-full h-screen flex relative flex-col">


            <div class=" h-full z-1 text-white flex items-start flex-col justify-around p-8 ">
                <div class="flex flex-col gap-8">
                    <span class="heading text-5xl sm:text-6xl md:text-7xl bold">Meet yourself in new destinations</span>
                    <span class="subheading text-2xl sm:text-3xl md:text-4xl bold">Conciergerie done differently</span>
                </div>
                <span class="text-2xl p-2 bg-yellow-600 inline text-gray-900 rounded">Book now</span>
            </div>
        </main>
    </div>
</template>
      
<style scoped>

</style>
      