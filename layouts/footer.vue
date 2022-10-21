<script>

export default {

}

</script>

<template>
  <footer class="flex flex-col items-center md:items-start md:flex-row justify-around p-8 gap-8 bg-black text-white">
    <nuxt-img class="w-40 object-contain" src="/logo.png" />

    <div class="flex flex-col gap-2 w-full sm:w-1/2 md:w-auto">
      <h1 class="text-3xl">Company</h1>
      <span class="h-px w-full bg-white"></span>
      <span>About</span>
      <span>Partners</span>
      <span>Terms</span>
      <span>Privacy</span>
    </div>
    <div class="flex flex-col gap-2 w-full sm:w-1/2 md:w-auto">
      <h1 class="text-3xl">Customer Services</h1>
      <span class="h-px w-full bg-white"></span>
      <span></span>
      <span>Contact Us</span>
      <span>FAQs</span>
      <span>Events</span>
    </div>
    <!-- <div class="flex flex-col gap-2 w-full sm:w-1/2 md:w-auto">
      <h1 class="text-3xl">Social</h1>
      <span class="h-px w-full bg-white"></span>
      <div class="flex flex-row gap-4">
        <span
        class="w-12 h-12 p-2 border rounded-full flex justify-center items-center text-center hover:bg-white hover:text-black transition">
        <i class="fa-brands fa-instagram text-xl "></i>
      </span>
      <span
        class="w-12 h-12 p-2 border rounded-full flex justify-center items-center text-center hover:bg-white hover:text-black transition">
        <i class="fa-brands fa-facebook text-xl "></i>
      </span>
      <span
        class="w-12 h-12 p-2 border rounded-full flex justify-center items-center text-center hover:bg-white hover:text-black transition">
        <i class="fa-brands fa-linkedin text-xl "></i>
      </span>
      </div>
      <div class="flex flex-row gap-4 w-full items-center">
        <span
        class="w-12 h-12 p-2 border rounded-full flex justify-center items-center text-center hover:bg-white hover:text-black transition">
        <i class="fa-solid fa-phone text-xl "></i>
      </span>
      <span class="flex flex-col h-full justify-between text-xl">
        <span>+33 6 06 63 88 86</span>
        <span>+90 543 184 10 21</span>
      </span>
      </div>
    </div> -->

  </footer>
</template>

<style scoped>
footer {
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%2302000c' fill-opacity='1'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
}
</style>
