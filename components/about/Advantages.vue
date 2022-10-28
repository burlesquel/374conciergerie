<script>
import Advantage from '../Advantage.vue';
import SectionHeader from '../SectionHeader.vue';
export default {
    components: { Advantage, SectionHeader }
}
</script>

<template>
    <section class="w-full bg-gray-100 text-center flex flex-col items-center p-4">
        <SectionHeader :text="$t('about').advantages.heading" />
        <div class="w-full flex flex-row flex-wrap">
            
            <Advantage  
            v-for="advantage in $t('about').advantages.advantages"
            :key="advantage.heading"
            :heading="advantage.heading" 
            :content="advantage.content"
            :icon_class="advantage.icon" />
        </div>
    </section>
</template>