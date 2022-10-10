<script>
import Header from './header.vue';
import MobileNavigation from '../components/MobileNavigation.vue';
import Footer from './footer.vue';
import Copyright from './copyright.vue'
import StickyPhoneButton from '../components/StickyPhoneButton.vue';
    export default{
    components: { Header, MobileNavigation, Footer, Copyright, StickyPhoneButton },
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
    <div class="relative" @click="toggleLanguagePopup" >
        <MobileNavigation :open="mobileNavOpen" @togglenavbar="toggleNavbar"/>

        <Header :popup-state="languagePopupState" @togglenavbar="toggleNavbar"/>

        <Nuxt/>

        <Footer/>
        
        <StickyPhoneButton/>

        <Copyright/>

    </div>
</template>
