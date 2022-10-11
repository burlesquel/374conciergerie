<script>
export default{
    props:{
        text:{
            default:"",
            type:String,
            required:true
        }
    }
}
</script>

<template>
    <div>
        <h1 class="font-semibold text-5xl mb-4">{{text}}</h1>
        <div class="w-full h-0.5 bg-logorange"></div>
    </div>
</template>