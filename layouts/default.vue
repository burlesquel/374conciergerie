<script>
import Header from './header.vue';
import MobileNavigation from '../components/MobileNavigation.vue';
import Footer from './footer.vue';
import Copyright from './copyright.vue'
    export default{
    components: { Header, MobileNavigation, Footer, Copyright },
    data(){
        return{
            mobileNavOpen:false,
            languagePopupState:false
        }
    },
    methods:{
        toggleNavbar(){
            this.mobileNavOpen = !this.mobileNavOpen
        },
        toggleLanguagePopup(e) {
            if (e.target.getAttribute("name") === "language-popup") {
                this.languagePopupState = !this.languagePopupState
            }
            else {
                this.languagePopupState = false
            }
        }
    }
}
</script>

<template>
    <div @click="toggleLanguagePopup" >
        <MobileNavigation :open="mobileNavOpen" @togglenavbar="toggleNavbar"/>

        <Header :popup-state="languagePopupState" @togglenavbar="toggleNavbar"/>

        <Nuxt/>

        <Footer/>
        
        <nuxt-img class="fixed right-2 bottom-2 w-16 h-16 cursor-pointer" src="/whatsapp.png"/>

        <Copyright/>

    </div>
</template>
