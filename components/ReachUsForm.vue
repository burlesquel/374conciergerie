<script>
import SectionHeader from './SectionHeader.vue';
import Input from './Input.vue';
export default {
    components: { SectionHeader, Input },
    methods:{
        form_handler(e){
            e.preventDefault()
            console.log(e);
        }
    }
}
</script>

<template>
    <section class="p-4 bg-white w-full flex flex-col items-center gap-8">
        <SectionHeader text="Contact" />
        <div class="flex w-full flex-col md:flex-row justify-around">

            <div class="w-full md:w-1/2 lg:w-1/3 p-4 flex flex-col gap-8">
                <h1 class="text-3xl font-semibold self-center">Reach us</h1>
                <span class="font-light self-center">Our representatives will be in contact within 24 hours.</span>
                <form @submit="form_handler" class="flex flex-col gap-4 p-8 border shadow">
                    <Input name="name" placeholder="Name" />
                    <Input name="email" placeholder="E-mail" />
                    <Input :type="1" name="message" placeholder="Your message" />
                    <button type="submit" class="bg-logorange text-white p-2 inline self-center rounded border">
                        Send
                    </button>
                </form>

            </div>

            <nuxt-img class="hidden md:block md:w-1/3 object-contain" src="/logo.png"/>

        </div>
    </section>
</template>