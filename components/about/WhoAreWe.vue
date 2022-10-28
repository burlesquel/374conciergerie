<script>
import SectionHeader from '../SectionHeader.vue';
export default {
    components: { SectionHeader }
}
</script>

<template>
    <section class="p-4 bg-white flex flex-col items-center">
        <SectionHeader :text="$t('about').whoarewe.heading" />
        <div class="flex flex-col-reverse md:flex-row justify-around items-center">
            <div class="w-full md:w-1/2 p-4 text-lg">
                <p class="mb-8">
                   {{$t('about').whoarewe.content1[0]}}
                </p>
                <p>
                    {{$t('about').whoarewe.content1[1]}}
                </p>
            </div>
            <div class="w-full md:w-1/2 p-8">
                <nuxt-img class="object-contain  rounded-md"
                    src="/kiz_kulesi.png" />
            </div>
        </div>
        <div class="flex flex-col md:flex-row-reverse justify-around items-center">
            <div class="w-full md:w-1/2 p-4 text-lg">
                <h1 class="font-semibold text-2xl mb-8">
                    {{$t('about').whoarewe.content2.general_manager}} <br/> Arthur Aubin </h1>
                    <i class="fa-solid fa-quote-left"></i>
                <p>
                   {{$t('about').whoarewe.content2.quote}}
                </p>
                <i class="fa-solid fa-quote-right float-right"></i>
            </div>
            <div class="w-full md:w-2/5 p-8">
                <nuxt-img class="object-contain  rounded-md" src="/arthur.png" />
            </div>
        </div>
    </section>
</template>