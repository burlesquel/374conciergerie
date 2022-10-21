<script>
export default {
    props: {
        name: { required: true, type: String, default: "" },
        placeholder: { required: true, type: String, default: "" },
        type: { required: false, type: Number, default: 0 }
    },
    data() {
        return {
            active: false,
            value: ""
        }
    },
    methods: {
        focus_on_input() {
            this.$refs.input.focus()
            this.active = true
        },
        on_blur() {
            if (!this.value.length > 0) {
                this.active = false
            }
        }
    }
}
</script>

<template>
    <div :class="{'container':!active, 'container container-active':active}">
        <input v-if="type === 0" class="input shadow" :name="name" v-model="value" ref="input" @blur="on_blur()"
            @focus="active = true" />
        <textarea rows="4" :placeholder="placeholder" :name="name" class="input" v-else></textarea>
        <div v-if="type === 0" @click="focus_on_input()"
            class="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-start cursor-text pointer-events-none select-none">
            <span :class="{'placeholder':!active, 'placeholder placeholder-active':active}">{{placeholder}}</span>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    display: inline-block;
    ;
}

.container-active {}

.input {
    all: unset;
    border: 2px solid gray;
    background-color: transparent;
    width: 100%;
    padding: .25rem;
    word-break: break-all
}

.input:focus {
    /* background: #92762c */
    border: 2px solid #92762c;
}

/* background-color: orange; */

.placeholder {
    background: white;
    transition: transform 200ms, color 200ms;
    color: gray;
    margin-left: 5px;
    white-space: nowrap;
}

.placeholder-active {
    color: #92762c;
    transform: scale(.8);
    transform: translateY(-80%) translateX(20%);
    font-weight: 500
}
</style>