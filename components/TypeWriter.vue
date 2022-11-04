<script>
export default {
    props: {
        words: { required: true, type: Array },
        delay: { required: false, type: Number, default: 1000 },
        speed: { required: false, type: Number, default: 150 },
        line_color: { required: false, type: String, default: "#000000" }
    },
    data() {
        return ({
            current: ""
        })
    },
    methods: {
        async type(word) {
            for (var letter of word) {
                await new Promise(r => setTimeout(r, this.speed));
                this.current = this.current + letter
            }
            await new Promise(r => setTimeout(r, this.delay));
        },
        async delete() {
            for (var letter of this.current) {
                await new Promise(r => setTimeout(r, this.speed));
                this.current = this.current.slice(0, -1)
            }
            await new Promise(r => setTimeout(r, this.delay));
        }
    },
    async created() {
        while (true) {
            for (var word of this.words) {
                await this.type(word)
                await this.delete()
            }
        }
    }
}
</script>
    
<template>

        <span>{{ current }}<span :style="{ color: line_color }">|</span></span>

</template>