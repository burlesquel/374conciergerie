<script>
export default {
    props: {
        open: {
            type: Boolean,
            default: true,
            required: true
        }
    },
    methods: {
        toggleSubmenu() {
            this.submenuOpen = !this.submenuOpen
        },
        toggleNavbar() {
            this.$emit("togglenavbar")
        }
    },
    data() {
        return ({
            submenuOpen: false,
            services: [
                {
                    name: "Service1",
                    url: "/Service1",
                },
                {
                    name: "Service2",
                    url: "/Service1",
                },
                {
                    name: "Service3",
                    url: "/Service1",
                },
                {
                    name: "Service4",
                    url: "/Service1",
                },
            ],
        })
    }
}
</script>

<template>
    <transition name="mobileNav">
        <div v-if="open" class="w-screen h-screen overflow-y-auto fixed z-30 top-0 bottom-0  right-0 ">

            <div class="w-full h-full relative flex flex-col justify-evenly bg-white p-4 px-8 gap-4">

                <i @click="toggleNavbar" class="fa-solid fa-x block text-3xl absolute right-4 top-4"></i>

                <nuxt-img src="/logo.png" class="w-4/5 object-contain self-center" />

                <div class="self-center">
                    <label>Language: </label>
                    <select class="inline">
                        <option>Türkçe</option>
                        <option>English</option>
                        <option>Deutsch</option>
                    </select>
                </div>


                <nav class="flex flex-col font-bold uppercase text-gray-600">

                    <NuxtLink class="border-b p-2" to="/">HOME</NuxtLink>
                    <NuxtLink class="border-b p-2" to="/about">ABOUT</NuxtLink>
                    <div class="border-b p-2">
                        <span @click="toggleSubmenu" class="inline-flex flex-row items-center">SERVICES <i
                                class="fa-solid fa-sort-down inline"></i></span>
                        <transition name="submenu">
                            <div v-if="submenuOpen" class="flex flex-col">
                                <span v-for="service of services"
                                    class="hover:bg-pink-100 cursor-pointer p-2 border-b pl-1">{{service.name}}</span>
                            </div>
                        </transition>
                    </div>
                    <NuxtLink class="border-b p-2" to="/media">MEDIA</NuxtLink>
                    <NuxtLink class="border-b p-2" to="/contact">İLETİŞİM</NuxtLink>
                </nav>
            </div>

        </div>
    </transition>
</template>

<style scoped>
.mobileNav-enter,
.mobileNav-leave-to {
    width: 0;
    opacity: 0
}

.mobileNav-enter-active,
.mobileNav-leave-active {
    transition: 0.6s;
}

.mobileNav-enter-to,
.mobileNav-leave-from {
    width: 100%;
    opacity: 1
}

.submenu-enter,
.submenu-leave-to {
    height: 0;
    opacity: 0
}

.submenu-enter-active,
.submenu-leave-active {
    transition: 0.5s;
}

.submenu-enter-to,
.submenu-leave-from {
    height: auto;
    opacity: 1
}
</style>