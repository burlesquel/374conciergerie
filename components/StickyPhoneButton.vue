<script>
export default {
    data() {
        return {
            active: false
        }
    },
    methods: {
        toggle() {
            this.active = !this.active
        }
    }
}
</script>

<template>
    <div class="fixed right-2 bottom-2 z-50">
            <nuxt-img class="w-14 h-14 cursor-pointer" src="/whatsapp.png" />
    </div>
</template>

<style>

</style>