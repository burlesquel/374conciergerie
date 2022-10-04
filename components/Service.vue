<script>
export default {
  props: {
    heading: {
      type: String,
      required:true
    },
    icon_class: {
      type: String,
      required:true
    }
  }
}
</script>

<template>
  <div class="animation-element fade-up flex flex-col items-center gap-4 w-fit text-gray-800 w-full sm:w-1/2 lg:w-1/3 px-2 py-4">
      <i :class="`${icon_class} rounded-full bg-logorange w-10 h-10 text-indigo-900 text-4xl p-2`"></i>
    <h1 class="text-3xl">{{heading}}</h1>
    <span class="text-lg text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum sapiente, sequi alias inventore aperiam
      vero cupiditate itaque a nemo et labore, qui assumenda nisi explicabo esse voluptatibus iste numquam!
    </span>
  </div>
</template>

<style>

</style>
