<script>

export default {
    data() {
        return {
            screenSize: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            sound: false
        }
    },
    methods: {
        handleResize() {
            this.screenSize.width = window.innerWidth
            this.screenSize.height = window.innerHeight
        }
    },
    computed: {
        soundOpen() {
            console.log("sound changed to: ", this.sound);
            try {
                this.$refs.video.muted = !this.sound
            }
            catch (err) {
                console.log(err);
            }
            return this.sound
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
    <section class="relative w-full h-90vh bg-gray-100">

        <video ref="video" v-if="screenSize.width > 640"
            class="relative h-full w-full bg-gray-300 object-cover object-bottom" autoplay muted playsinline
            id="myVideo">
            <source src="~/assets/entrance_video.webm" type="video/webm">
        </video>

        <div v-if="screenSize.width > 640" class="flex absolute top-4 right-4 z-10">
            <i @click="sound = false" v-if="soundOpen"
                class="fa-solid fa-volume-low text-5xl text-white cursor-pointer"></i>
            <i @click="sound = true" v-else class="fa-solid fa-volume-xmark text-5xl text-white cursor-pointer"></i>
        </div>

        <nuxt-img v-if="screenSize.width < 640" class="h-full w-full object-cover object-center absolute"
            src="/landing_image.png" />

        <div v-if="screenSize.width < 640" class="w-full h-full z-10 relative">
            <div class=" h-full z-1 text-white flex items-start flex-col justify-around p-8 ">
                <div class="flex w-3/4 flex-col gap-8">
                    <h1 class="heading text-4xl sm:text-5xl md:text-6xl bold">374 Conciergerie: Your personal concierge
                        service in Istanbul.</h1>
                    <!-- <h2 class="subheading text-2xl sm:text-3xl md:text-4xl bold">
For a few days or a long time, for vacation or work, 374 Conciergerie makes your life easier.
</h2> -->
                </div>
                <button class="text-2xl p-2 bg-yellow-600 inline text-gray-900 rounded">Book now</button>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
