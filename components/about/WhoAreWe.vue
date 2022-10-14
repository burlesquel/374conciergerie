<script>
import SectionHeader from '../SectionHeader.vue';
export default {
    components: { SectionHeader }
}
</script>

<template>
    <section class="p-4 bg-white flex flex-col items-center">
        <SectionHeader text="Who are we?" />
        <div class="flex flex-col-reverse md:flex-row justify-around items-center">
            <div class="w-full md:w-1/2 p-4 text-lg">
                <p class="mb-8">
                    We are proud of our ideals and have as a heritage the most prominent hotel conciergerie, which we
                    intended to transfer into our customers' daily life.
                    374 Conciergerie relies on an address book and a great network to provide us with benefits not
                    available
                    elsewhere in order to please our clients and provide individualized service.
                    To satisfy our clients' demands, we have set up a system in Istanbul with partners that share our
                    principles.
                    We are here to provide you with an amazing experience and to assist your project around the clock.
                </p>
                <p>
                    Whatever their demands, our guests always have access to all of the resources of 374 Conciergerie.
                    We
                    systematically identify the optimal answer, even if it appears impossible or unusual.
                    All of your aspirations are organized by us, we anticipate and take action.
                </p>
            </div>
            <div class="w-full md:w-1/2 p-8">
                <nuxt-img class="object-contain  rounded-md"
                    src="/kiz-kulesi-maidens-tower-at-night-in-istanbul-turk.webp" />
            </div>
        </div>
        <div class="flex flex-col md:flex-row-reverse justify-around items-center">
            <div class="w-full md:w-1/2 p-4 text-lg">
                <h1 class="font-semibold text-2xl mb-8">
                    Arthur Aubin </h1>
                <p>
                    Concierge work is above all a passion for me, it is a daily challenge for me to provide our members
                    with a one-of-a-kind and unforgettable experience. The hotel concierge is one of the most beautiful
                    jobs in the world to me, which is why I want to capture this atmosphere for our 374 Conciergerie
                    members utilizing my knowledge gained while working alongside the best Clefs d'or concierges of the
                    largest French palaces where I was able to work. Because each of our members has a distinct
                    personality, we tailor each of our services to you and only you. Welcome in 374 Conciergerie.
                </p>
            </div>
            <div class="w-full md:w-2/5 p-8">
                <nuxt-img class="object-contain  rounded-md" src="/arthur.png" />
            </div>
        </div>
    </section>
</template>