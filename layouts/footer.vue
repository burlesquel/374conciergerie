<script>

export default {

}

</script>

<template>
  <footer class="flex flex-col items-center md:items-start md:flex-row justify-around p-8 gap-8 bg-black text-white">
    <nuxt-img class="w-40 object-contain" src="/logo.png" />

    <div class="flex flex-col gap-2 w-full sm:w-1/2 md:w-auto">
      <h1 class="text-3xl select-none">{{ $t('footer').company }}</h1>
      <span class="h-px w-full bg-white"></span>
      <NuxtLink :to="localePath('about')">{{ $t('footer').about }}</NuxtLink>
      <NuxtLink :to="localePath('services')">{{ $t('footer').services }}</NuxtLink>
      <NuxtLink :to="localePath('offers')">{{ $t('footer').offers }}</NuxtLink>
      <a href="https://www.termsfeed.com/live/66bff286-58ff-420f-9312-3cf397825157" target="_blank">{{ $t('footer').terms_privacy }}</a>
    </div>
    <div class="flex flex-col gap-2 w-full sm:w-1/2 md:w-auto">
      <h1 class="text-3xl select-none">{{ $t('footer').customer_services }}</h1>
      <span class="h-px w-full bg-white"></span>
      <NuxtLink :to="localePath('contact')">{{ $t('footer').contact_us }} </NuxtLink>
      <NuxtLink :to="localePath('faq')">{{ $t('footer').faqs }}</NuxtLink>
    </div>
    <div class="flex flex-col gap-2 w-full sm:w-1/2 md:w-auto">
      <h1 class="text-3xl select-none">{{ $t('footer').social }}</h1>
      <span class="h-px w-full bg-white"></span>
      <div class="flex flex-row gap-4">
        <a href="https://www.instagram.com/374conciergerie/" target="_blank"
          class="w-12 h-12 p-2 border rounded-full flex justify-center items-center text-center hover:bg-white hover:text-black transition">
          <i class="fa-brands fa-instagram text-xl "></i>
        </a>
        <a href="https://www.instagram.com/374conciergerie/" target="_blank"
          class="w-12 h-12 p-2 border rounded-full flex justify-center items-center text-center hover:bg-white hover:text-black transition">
          <i class="fa-brands fa-facebook text-xl "></i>
        </a>
        <a href="https://www.instagram.com/374conciergerie/" target="_blank"
          class="w-12 h-12 p-2 border rounded-full flex justify-center items-center text-center hover:bg-white hover:text-black transition">
          <i class="fa-brands fa-linkedin text-xl "></i>
        </a>
      </div>
      <a class="flex flex-row gap-4 w-full items-center">
        <a href="tel:+905431841021"
          class="w-12 h-12 p-2 border rounded-full flex justify-center items-center text-center hover:bg-white hover:text-black transition">
          <i class="fa-solid fa-phone text-xl "></i>
        </a>
        <a href="https://wa.me/+905431841021" target="_blank"
          class="w-12 h-12 p-2 border rounded-full flex justify-center items-center text-center hover:bg-white hover:text-black transition">
          <i class="fa-brands fa-whatsapp text-xl "></i>
        </a>
      </a>
    </div>

  </footer>
</template>

<style scoped>
footer {
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%2302000c' fill-opacity='1'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
}
</style>
