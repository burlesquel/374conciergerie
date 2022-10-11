<script>
import SectionHeader from '../SectionHeader.vue';
export default{
    components:{ SectionHeader }
}
</script>

<template>
    <section class="p-4 bg-white flex flex-col items-center">
        <SectionHeader text="Who are we?"/>
        <div class="flex flex-col-reverse md:flex-row justify-around items-center">
            <p class="w-full md:w-1/2 p-4 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat deserunt similique, temporibus pariatur saepe sed placeat ut laboriosam possimus, qui ipsam eius? Temporibus ipsum iste aliquam perspiciatis, asperiores quos magnam?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat deserunt similique, temporibus pariatur saepe sed placeat ut laboriosam possimus, qui ipsam eius? Temporibus ipsum iste aliquam perspiciatis, asperiores quos magnam?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat deserunt similique, temporibus pariatur saepe sed placeat ut laboriosam possimus, qui ipsam eius? Temporibus ipsum iste aliquam perspiciatis, asperiores quos magnam?
            </p>
            <div class="w-full md:w-1/2 p-8">
                <nuxt-img class="object-contain  rounded-md" src="/kiz-kulesi-maidens-tower-at-night-in-istanbul-turk.webp"/>
            </div>
        </div>
    </section>
</template>