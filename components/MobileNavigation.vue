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
        },
        changeLocale(code){
            this.$i18n.setLocale(code)
            this.toggleNavbar()
        }
    },
    data() {
        return ({
            submenuOpen: false,
        })
    }
}
</script>

<template>
    <transition name="mobileNav">
        <div v-if="open" class="w-screen h-screen overflow-y-auto fixed z-30 top-0 bottom-0  right-0 ">

            <div class="w-full h-full relative flex flex-col justify-center bg-white p-4 px-8 gap-4">

                <i @click="toggleNavbar" class="fa-solid fa-x block text-3xl absolute right-4 top-4"></i>

                <div class="self-center">
                    <label>Language: </label>
                    <select class="inline" @change="(e) => changeLocale(e.target.value)">
                        <option :selected="language.code === $i18n.locale" v-for="language in $i18n.locales" :key="language.code" :value="language.code">
                            {{language.name}}
                        </option>
                    </select>
                </div>

                <nav class="flex flex-col font-bold text-gray-600 text-4xl">
                    <NuxtLink v-for="(item, index) in $t('navigation_links')" class="border-b p-2"
                        :class="{ 'text-yellow-300': $route.name === item.dir.replace('/', '') }"
                        :to="item.dir.includes('index') ? localePath('/') : localePath(item.dir)" :key="index" @click.native="toggleNavbar()">
                        {{ item.name.replaceAll("i", "*").toUpperCase().replaceAll("*", "İ") }}
                    </NuxtLink>
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