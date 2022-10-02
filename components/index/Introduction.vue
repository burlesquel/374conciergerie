<script>
    import TypeWriter from '../TypeWriter.vue';
    export default{
        components:{TypeWriter}
    }
</script>

<template>
    <section class="flex flex-col md:flex-row justify-around items-center text-black bg-gray-100 w-full p-8 gap-4 md:gap-0 border-b">
        <nuxt-img class="w-full md:w-1/2 object-contain rounded shadow-lg" src="/water-trip-at-night.webp" />
        <div class="w-full md:w-1/2 p-2 md:p-8 flex flex-col gap-8 justify-center font-light">
            <h1 class="text-5xl ">Travel <TypeWriter class="text-yellow-800" :speed="100" :delay="500" :words='["exclusively", "privileged", "first-class"]'/> </h1>
            <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minus odio voluptatibus obcaecati
                officia dolorum doloremque debitis, pariatur perferendis rerum! Pariatur explicabo iste vitae nulla
                sequi itaque tempore placeat mollitia.</p>
            <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minus odio voluptatibus obcaecati
                officia dolorum doloremque debitis, pariatur perferendis rerum! Pariatur explicabo iste vitae nulla
                sequi itaque tempore placeat mollitia.</p>
        </div>
    </section>
</template>

<style scoped>

section{
  /* background: rgb(0, 0, 0);
  background: linear-gradient(0deg, #21192f 0%, #18151D 100%); */
}
</style>