<script>

export default {
  props: {
    popupState: { type: Boolean }
  },
  data() {
    return {
      popup_open: false
    }
  },
  methods: {
    toggleNavbar() {
      this.$emit("togglenavbar")
    },
  },
}

</script>

<template>
  <header
    class="w-full text-white p-4 px-8 flex flex-row items-center justify-between sm:justify-center gap-6 text-2xl sticky top-0 z-50 shadow-lg bg-black">

    <nav class="hidden sm:flex flex-row gap-4 md:gap-8 ">

      <NuxtLink class="flex flex-col gap-2 group w-auto lg:w-28" :to="localePath($t('navigation_links').home.dir)"
        :key="index">
        <span :class="{ 'text-logorange': $route.name.includes('index') }"
          class="font-light group-hover:text-logorange">{{
              $t('navigation_links').home.name
          }}</span>
        <span :class="{ 'bg-logorange': $route.name.includes('index') }"
          class="w-full h-px group-hover:bg-logorange bg-white "></span>
      </NuxtLink>

      <NuxtLink class="flex flex-col gap-2 group w-auto lg:w-28" :to="localePath($t('navigation_links').services.dir)"
        :key="index">
        <span :class="{ 'text-logorange': $route.name.includes('services') }"
          class="font-light group-hover:text-logorange">{{ $t('navigation_links').services.name }}</span>
        <span :class="{ 'bg-logorange': $route.name.includes('services') }"
          class="w-full h-px group-hover:bg-logorange bg-white "></span>
      </NuxtLink>

      <NuxtLink class="flex flex-col gap-2 group w-auto lg:w-28" :to="localePath($t('navigation_links').offers.dir)"
        :key="index">
        <span :class="{ 'text-logorange': $route.name.includes('offers') }"
          class="font-light group-hover:text-logorange">{{ $t('navigation_links').offers.name }}</span>
        <span :class="{ 'bg-logorange': $route.name.includes('offers') }"
          class="w-full h-px group-hover:bg-logorange bg-white"></span>
      </NuxtLink>

    </nav>

    <NuxtLink class="h-full" :to="localePath('/')">
      <nuxt-img class="object-contain h-full" src="/logo.png" />
    </NuxtLink>

    <nav class="hidden sm:flex flex-row gap-4 md:gap-8">

      <NuxtLink class="flex flex-col gap-2 items-end group w-auto lg:w-28"
        :to="localePath($t('navigation_links').about_us.dir)" :key="index">
        <span :class="{ 'text-logorange': $route.name.includes('about') }"
          class="font-light group-hover:text-logorange">{{
              $t('navigation_links').about_us.name
          }}</span>
        <span :class="{ 'bg-logorange': $route.name.includes('about') }"
          class="w-full h-px group-hover:bg-logorange bg-white"></span>
      </NuxtLink>

      <NuxtLink class="flex flex-col gap-2 items-end group w-auto lg:w-28"
        :to="localePath($t('navigation_links').contact.dir)" :key="index">
        <span :class="{ 'text-logorange': $route.name.includes('contact') }"
          class="font-light group-hover:text-logorange">{{ $t('navigation_links').contact.name }}</span>
        <span :class="{ 'bg-logorange': $route.name.includes('contact') }"
          class="w-full h-px group-hover:bg-logorange bg-white"></span>
      </NuxtLink>

      <NuxtLink class="flex flex-col gap-2 items-end group w-auto lg:w-28"
        :to="localePath($t('navigation_links').faq.dir)" :key="index">
        <span :class="{ 'text-logorange': $route.name.includes('faq') }"
          class="font-light group-hover:text-logorange">{{
              $t('navigation_links').faq.name
          }}</span>
        <span :class="{ 'bg-logorange': $route.name.includes('faq') }"
          class="w-full h-px group-hover:bg-logorange bg-white"></span>
      </NuxtLink>

    </nav>

    <div class="absolute float-right right-8 flex flex-col items-center gap-4">
      <i class="fa-solid fa-globe hidden sm:flex text-xl cursor-pointer" name="language-popup"></i>
      <div class="absolute flex flex-col bg-white text-black items-center top-7 text-lg border shadow rounded-sm"
        v-if="popupState">

        <span :class="{ 'bg-yellow-300': language.code === $i18n.locale }"
          class="p-0.5 w-full hover:bg-yellow-200 cursor-pointer select-none" v-for="language in $i18n.locales"
          :key="language.name">
          <NuxtLink :to="switchLocalePath(language.code)">{{ language.name }}</NuxtLink>
        </span>

      </div>
    </div>

    <span @click="toggleNavbar" class="flex sm:hidden text-white">
      <i class="fa fa-bars text-4xl"></i>
    </span>
  </header>
</template>

<style scoped>
header {
  height: 13vh;
  transition: 1s ease-in-out;
}
</style>
