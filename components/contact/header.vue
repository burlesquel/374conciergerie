<template>
    <section class="w-full flex flex-col items-center gap-8 p-16">
        <div class="flex flex-col gap-4 items-center w-full">
            <h1 class="text-5xl font-semibold ">Contact 374 Conciergerie</h1>
            <span class="font-light">Get in touch with us to start the journey.</span>
        </div>
        <div class="flex flex-row justify-around w-auto md:w-2/3 gap-4 md:gap-0 flex-wrap">
            
            <div class="flex flex-col items-center gap-4">
                <div
                    class="flex justify-center items-center text-center rounded-full bg-logorange text-white hover:text-logorange hover:bg-white border transition h-24 w-24">
                    <i :class="`fa-solid fa-envelope text-3xl`"></i>
                </div>
                <h2 class="text-logorange tracking-wider font-semibold">EMAIL</h2>
                <span>374conciergerie@gmail.com</span>
            </div>

            <div class="flex flex-col items-center gap-4">
                <div
                    class="flex justify-center items-center text-center rounded-full bg-logorange text-white hover:text-logorange hover:bg-white border transition h-24 w-24">
                    <i :class="`fa-solid fa-phone text-3xl`"></i>
                </div>
                <h2 class="text-logorange tracking-wider font-semibold">PHONE</h2>
                <span>+90 543 184 1021</span>
            </div>

            <div class="flex flex-col items-center gap-4">
                <div
                    class="flex justify-center items-center text-center rounded-full bg-logorange text-white hover:text-logorange hover:bg-white border transition h-24 w-24">
                    <i :class="`fa-brands fa-whatsapp text-3xl`"></i>
                </div>
                <h2 class="text-logorange tracking-wider font-semibold">WHATSAPP</h2>
                <span>Message us</span>
            </div>

            <div class="flex flex-col items-center gap-4">
                <div
                    class="flex justify-center items-center text-center rounded-full bg-logorange text-white hover:text-logorange hover:bg-white border transition h-24 w-24">
                    <i :class="`fa-brands fa-facebook text-3xl`"></i>
                </div>
                <h2 class="text-logorange tracking-wider font-semibold">FACEBOOK</h2>
                <span>Follow us</span>
            </div>

            <div class="flex flex-col items-center gap-4">
                <div
                class="flex justify-center items-center text-center rounded-full bg-logorange text-white hover:text-logorange hover:bg-white border transition h-24 w-24">
                <i :class="`fa-brands fa-instagram text-3xl`"></i>
            </div>
                <h2 class="text-logorange tracking-wider font-semibold">INSTAGRAM</h2>
                <span>Follow us</span>
            </div>

        </div>
    </section>

</template>