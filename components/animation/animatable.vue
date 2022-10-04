<script>
import { isElemVisible, setInitialClasses, updateClasses } from './animation';
import { onMounted, onUnmounted } from 'vue';
export default {
    setup() {
        var animatables = []

        function onScroll() {
            updateClasses(animatables)
        }

        onMounted(() => {
            animatables = Array.from(document.getElementsByClassName("animation-element"))
            setInitialClasses(animatables)
            updateClasses(animatables)
            document.addEventListener("scroll", onScroll)
        })
        onUnmounted(() => {
            document.removeEventListener("scroll", onScroll)
        })
    }
}
</script>
    
<template>
    <div class="overflow-hidden" id="animatable">
        <slot/>
    </div>
</template>

    