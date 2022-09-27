<script>
import Header from './header.vue';
import MobileNavigation from '../components/MobileNavigation.vue';
    export default{
    components: { Header, MobileNavigation },
    data(){
        return{
            mobileNavOpen:false
        }
    },
    methods:{
        toggleNavbar(){
            this.mobileNavOpen = !this.mobileNavOpen
        }
    }
}
</script>

<template>
    <div>
        <MobileNavigation :open="mobileNavOpen" @togglenavbar="toggleNavbar"/>
        <Header @togglenavbar="toggleNavbar"/>

        <Nuxt/>

        <footer>
            footer
        </footer>
    </div>
</template>