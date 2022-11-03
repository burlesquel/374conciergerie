<script>
import SectionHeader from './SectionHeader.vue';
import Input from './Input.vue';
import emailjs from '@emailjs/browser';
export default {
    components: { SectionHeader, Input },
    data() {
        return {
            success: false
        }
    },
    methods: {
        form_handler(e) {
            e.preventDefault()
            try {
                // emailjs.send('service_3pzmfei', 'template_tlplcys', e.target,
                //     'QNwSl2f88VWe5jB_h', {
                //     name: this.name,
                //     email: this.email,
                //     message: this.message
                // })
                const templateParams = {
                    from_name: e.target.name.value,
                    to_name: "374Conciergerie",
                    message: e.target.message.value,
                    reply_to: e.target.email.value
                }
                console.log(templateParams);
                emailjs.send('service_3pzmfei', 'template_tlplcys', templateParams, 'QNwSl2f88VWe5jB_h').then(res => {
                    console.log(res);
                    this.success = true
                    e.target.name.value = ''
                    e.target.email.value = ''
                    e.target.message.value = ''
                }).catch(err => {
                    console.log(err)
                })

            } catch (error) {
                console.log({ error })
            }
            // Reset form field

        },

    }
}
</script>

<template>
    <section class="w-full flex flex-col md:flex-row justify-around items-center gap-8 bg-gray-50 p-8">

        <div
            class="w-full sm:w-2/5 p-4 flex flex-col items-center justify-around bg-white shadow-xl border border-gray-300 gap-4">
            <h1 class="text-3xl font-semibold self-center">{{ $t('reach_us').reach_us }}</h1>
            <span class="h-px w-1/2 bg-black"></span>
            <span class="font-light self-center">{{ $t('reach_us').our_rep_will_be_in_contact }}</span>
            <form @submit="form_handler" class="flex flex-col w-full gap-4 p-8 ">
                <Input name="name" :placeholder="$t('reach_us').name" />
                <Input name="email" :placeholder="$t('reach_us').email" />
                <Input :type="1" name="message" :placeholder="$t('reach_us').your_message" />
                <button type="submit" class="bg-logorange text-white p-2 inline self-center rounded border">
                    {{ $t('reach_us').send }}
                </button>
                <span v-if="success" class="text-green-600 font-semibold">{{ $t('reach_us').message_received
                }}</span>
            </form>
        </div>

        <nuxt-img class="hidden sm:flex h-80vh object-contain rounded-lg" src="/contact-img.jpg"/>

    </section>
</template>

<style scoped>

</style>