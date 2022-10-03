<script>
    export default{
        props:{
            header:{required:true, type:String},
            description:{required:true, type:String},
            image_uri:{required:true, type:String},
        }
    }
</script>

<template>
    <div class="w-72 flex flex-col text-center max-w-max gap-4 p-4 border shadow bg-white hover:bg-gray-50 transition duration-400 mb-4 cursor-pointer">
        <nuxt-img class="h-72 object-cover rounded" :src="image_uri" />
        <h1 class="text-3xl semibold">
            {{header}}
        </h1>
        <span class="">{{description}}</span>
    </div>
</template>