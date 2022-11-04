<script>
import TypeWriter from '../TypeWriter.vue';
export default {
    components: { TypeWriter }
}
</script>

<template>
    <section
        class="flex flex-col md:flex-row justify-around items-center text-black bg-gray-100 w-full p-8 gap-4 md:gap-0 border-b">
        <nuxt-img class="animation-element fade-left w-full md:w-1/2 object-contain rounded shadow-lg"
            src="/introduction.png" />
        <div
            class="animation-element fade-right w-full md:w-1/2 p-2 md:p-8 flex flex-col gap-8 justify-center font-light">
            <h1 class="text-5xl flex flex-col sm:flex-row">
                <span>{{$t('index').introduction.header.travel}}</span>
                <TypeWriter class="text-yellow-800" :speed="100" :delay="500"
                    :words="$t('index').introduction.header.typewriter_words" />
            </h1>
            <p class="text-xl"> {{ $t('index').introduction.content }}
            </p>
        </div>
    </section>
</template>

<style scoped>
section {
    /* background: rgb(0, 0, 0);
  background: linear-gradient(0deg, #21192f 0%, #18151D 100%); */
}
</style>