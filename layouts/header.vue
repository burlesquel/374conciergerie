<script>

export default {
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
      scrolled: false,
      current_path: null
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
  <!-- :class="{"text-orange-300":current_path === navigation.dir.replace("/","")}" -->
  <header
    class="w-full text-white p-4 px-8 flex flex-row items-center justify-between text-2xl sticky top-0 z-10 shadow-lg bg-black">
    <nuxt-img class="h-full object-contain" src="/logo.png" />
    <nav class="hidden sm:flex flex-row gap-10 ">
      <NuxtLink v-for="(item, index) in navigation_links"
        :class="{'text-yellow-300':$route.name === item.dir.replace('/', '')}" :to="item.dir.includes('index') ? '/' : item.dir" :key="index">
        {{item.name}}
      </NuxtLink>

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
