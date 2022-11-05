<script>
export default{
    props:{
        heading:{type:String, required:true, default:"Offer"},
        price:{type:Number, required:true, default:0},
        duration:{type:String, required:true, default:"duration"},
        contact_url:{type:String, required:true, default:"/"}
    }
}
</script>

<template>
    <div class="w-80 bg-black text-white flex flex-col shadow-lg">
        <span class="bg-logorange w-full py-2 text-center text-lg font-semibold">
            {{heading}}
        </span>
        <div class="flex flex-col items-center w-full gap-4 p-4 text-lg">
            <div class="flex flex-row items-center gap-2">
                <span class="text-2xl self-start">€</span>
                <span class="text-6xl">{{price}}</span>
                <span class="text-2xl self-end">/</span>
            </div>
            <span class="border-t border-white">
                {{$t('offers').including_taxes}}
            </span>
            <span>
                {{duration}}
            </span>
            <span>
                {{$t('offers').non_binding}}
            </span>
            <a :href="contact_url" target="_blank" class="px-8 py-2 border-t border-b cursor-pointer border-logorange text-logorange hover:text-yellow-800 hover:border-yellow-800">
                {{$t('offers').select}}
            </a>
        </div>
    </div>
</template>