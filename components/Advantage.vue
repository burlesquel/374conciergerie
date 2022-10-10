<script>
export default {
  props: {
    heading: {
      type: String,
      required: true
    },
    icon_class: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div
    class="animation-element fade-up flex flex-col items-center gap-4 w-fit text-gray-800 w-full sm:w-1/2 px-2 py-4 my-4">
    <div class="flex justify-center items-center text-center rounded-full text-logorange transition h-12 w-12">
      <i :class="`${icon_class} text-3xl`"></i>
    </div>
    
    <h1 class="text-3xl">{{heading}}</h1>
    <span class="text-lg text-center">
      {{content}}
    </span>
  </div>
</template>

<style>

</style>
