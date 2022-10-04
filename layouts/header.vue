<script>

export default {
  props:{
    popupState:{type:Boolean}
  },
  data() {
    return {
      navigation_links: [
        {
          name: "Home",
          dir: "/index",
        },
        {
          name: "Services",
          dir: "/services",
        },
        {
          name: "About Us",
          dir: "/about",
        },
        {
          name: "Media",
          dir: "/media",
        },
        {
          name: "Contact",
          dir: "/contact"
        }
      ],
      languages: [
        "Türkçe", "English", "Français", "Deutsch", "Russian"
      ],
      scrolled: false,
      current_path: null,
      popup_open: false
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        this.scrolled = true
      }
      else {
        this.scrolled = false
      }
    },
    toggleNavbar() {
      this.$emit("togglenavbar")
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    console.log("route: ", this.$route);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {
    console.log("route: ", this.$route);
    this.current_path = this.$route.name
  },

}
</script>

<template>
  <header
    class="w-full text-white p-4 px-8 flex flex-row items-center justify-between text-2xl sticky top-0 z-10 shadow-lg bg-black">
    <nuxt-img class="h-full object-contain" src="/logo.png" />
    <nav class="hidden sm:flex flex-row gap-10 ">
      <NuxtLink v-for="(item, index) in navigation_links"
        :class="{'text-yellow-300':$route.name === item.dir.replace('/', '')}"
        :to="item.dir.includes('index') ? '/' : item.dir" :key="index">
        {{item.name}}
      </NuxtLink>

    </nav>

    <div class="relative flex flex-col items-center gap-4">
      <i class="fa-solid fa-globe hidden sm:flex text-xl cursor-pointer" name="language-popup"></i>
      <div class="absolute flex flex-col bg-white text-black items-center top-7 text-lg border shadow rounded-sm"  v-if="popupState">
        <span class="p-0.5 w-full hover:bg-yellow-200 cursor-pointer select-none" v-for="language in languages">
          <span class=" ">{{language}}</span>
          <!-- <span v-if="languages.indexOf(language) !== languages.length-1" class="w-full h-px bg-black"></span> -->
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
