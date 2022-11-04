<template>
    <section class="w-full flex flex-col items-center gap-8 p-16">
        <div class="flex flex-col gap-4 items-center w-full">
            <h1 class="text-5xl font-semibold ">{{ $t('contact').heading }}</h1>
            <span class="font-light">{{ $t('contact').subheading }}</span>
        </div>
        <div class="flex flex-row justify-around w-auto md:w-2/3 gap-4 md:gap-0 flex-wrap">

            <a href="mailto:374conciergerie@gmail.com" class="flex flex-col items-center gap-4">
                <div
                    class="flex justify-center items-center text-center rounded-full bg-logorange text-white hover:text-logorange hover:bg-white border transition h-24 w-24">
                    <i :class="`fa-solid fa-envelope text-3xl`"></i>
                </div>
                <h2 class="text-logorange tracking-wider font-semibold">EMAIL</h2>
                <span>374conciergerie@gmail.com</span>
            </a>

            <a href="tel:+905431841021" class="flex flex-col items-center gap-4">
                <div
                    class="flex justify-center items-center text-center rounded-full bg-logorange text-white hover:text-logorange hover:bg-white border transition h-24 w-24">
                    <i :class="`fa-solid fa-phone text-3xl`"></i>
                </div>
                <h2 class="text-logorange tracking-wider font-semibold">{{ $t('contact').phone }}</h2>
                <span>+90 543 184 1021</span>
            </a>

            <a href="https://wa.me/+905431841021" target="_blank" class="flex flex-col items-center gap-4">
                <div
                    class="flex justify-center items-center text-center rounded-full bg-logorange text-white hover:text-logorange hover:bg-white border transition h-24 w-24">
                    <i :class="`fa-brands fa-whatsapp text-3xl`"></i>
                </div>
                <h2 class="text-logorange tracking-wider font-semibold">WHATSAPP</h2>
                <span>{{ $t('contact').message_us }}</span>
            </a>

            <a href="https://www.instagram.com/374conciergerie/" target="_blank" class="flex flex-col items-center gap-4">
                <div
                    class="flex justify-center items-center text-center rounded-full bg-logorange text-white hover:text-logorange hover:bg-white border transition h-24 w-24">
                    <i :class="`fa-brands fa-facebook text-3xl`"></i>
                </div>
                <h2 class="text-logorange tracking-wider font-semibold">FACEBOOK</h2>
                <span>{{ $t('contact').follow_us }}</span>
            </a>

            <a href="https://www.instagram.com/374conciergerie/" target="_blank" class="flex flex-col items-center gap-4">
                <div
                    class="flex justify-center items-center text-center rounded-full bg-logorange text-white hover:text-logorange hover:bg-white border transition h-24 w-24">
                    <i :class="`fa-brands fa-instagram text-3xl`"></i>
                </div>
                <h2 class="text-logorange tracking-wider font-semibold">INSTAGRAM</h2>
                <span>{{ $t('contact').follow_us }}</span>
            </a>

        </div>
    </section>

</template>