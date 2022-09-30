<script>

export default {
  data() {
    return {
      navigation_links: [
        {
          name: "Home",
          dir: "/",
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
      scrolled: false
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
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<template>

  <header :class="'bg-black'"
    class="w-full text-white p-4 px-8 flex flex-row items-center justify-between text-2xl sticky top-0 z-10 shadow-lg">
    <nuxt-img class="h-full object-contain" src="/logo.png" />
    <nav class="hidden sm:flex flex-row gap-10 ">
      <span class="transition duration-300 hover:transform hover:scale-105 cursor-pointer"
        v-for="navigation in navigation_links">
        {{navigation.name}}
      </span>
    </nav>

    <i class="fa-brands fa-instagram hidden sm:flex text-xl"></i>

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
