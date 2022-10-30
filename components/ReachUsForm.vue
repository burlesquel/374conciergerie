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
    <section class="w-full flex flex-col items-center gap-8 bg-gray-50 py-32">
        <!-- <SectionHeader :text="$t('contact').heading" /> -->
        <div class="w-full relative bg-black parent">

            <div
                class="w-full md:w-1/2 lg:w-1/3 p-4 flex flex-col items-center justify-around bg-white shadow-xl border border-gray-300 absolute top-0 bottom-0 float-left contactbox">
                <h1 class="text-3xl font-semibold self-center">{{ $t('contact').reach_us }}</h1>
                <span class="h-px w-1/2 bg-black"></span>
                <span class="font-light self-center">{{ $t('contact').our_rep_will_be_in_contact }}</span>
                <form @submit="form_handler" class="flex flex-col w-full gap-4 p-8 ">
                    <Input name="name" :placeholder="$t('contact').name" />
                    <Input name="email" :placeholder="$t('contact').email" />
                    <Input :type="1" name="message" :placeholder="$t('contact').your_message" />
                    <button type="submit" class="bg-logorange text-white p-2 inline self-center rounded border">
                        {{ $t('contact').send }}
                    </button>
                    <span v-if="success" class="text-green-600 font-semibold">{{ $t('contact').message_received
                    }}</span>
                </form>

            </div>

            <div class="flex flex-col w-1/3 h-full justify-around self-center float-right text-white text-lg">
                <!-- <h1 class="text-3xl font-semibold "> {{ $t('contact').social }} </h1> -->
                <div class="h-px w-1/2 "></div>

                <div class="flex flex-col gap-2">
                    <h1 class="flex flex-row items-center gap-4 text-xl"><i class="fa-solid fa-share-nodes text-4xl">
                        </i> {{ $t('contact').follow_us }}</h1>
                    <div class="flex flex-row gap-1">
                        <a target="_blank" href="https://www.instagram.com/374conciergerie/"
                            class="w-12 h-12 p-2 border border-white rounded-full flex justify-center items-center text-center bg-black hover:bg-white hover:text-black transition">
                            <i class="fa-brands fa-instagram text-2xl "></i>
                        </a>
                        <span
                            class="w-12 h-12 p-2 border border-white rounded-full flex justify-center items-center text-center bg-black hover:bg-white hover:text-black transition">
                            <i class="fa-brands fa-facebook text-2xl "></i>
                        </span>
                        <span
                            class="w-12 h-12 p-2 border border-white rounded-full flex justify-center items-center text-center bg-black hover:bg-white hover:text-black transition">
                            <i class="fa-brands fa-linkedin text-2xl "></i>
                        </span>
                        <!-- <span
                        class="w-12 h-12 p-2 border border-black rounded-full flex justify-center items-center text-center hover:bg-black hover:text-white transition">
                        <i class="fa-solid fa-phone text-2xl "></i>
                    </span> -->
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <h1 class="flex flex-row items-center gap-4 text-xl">
                        <i class="fa-solid fa-phone text-4xl"></i>
                        {{ $t('contact').or_call_us }}
                    </h1>
                    <a href="tel:" class="text-3xl font-semibold">+90 543 184 1021</a>
                </div>


                <div class="flex flex-col gap-2">
                    <h1 class="flex flex-row items-center gap-4 text-xl">
                        <i class="fa-solid fa-comment text-4xl"></i>
                        You can also reach us on
                    </h1>
                    <span
                        class="w-12 h-12 p-2 border border-white rounded-full flex justify-center items-center text-center bg-black hover:bg-white hover:text-black transition">
                        <i class="fa-brands fa-whatsapp text-2xl "></i>
                    </span>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
.parent {
    width: 100%;
    background: black;
    position: relative;
    height: 400px;
}

.contactbox {
    height: 550px;
    top: -75px;
    bottom: -75px;
    left: 100px
}
</style>