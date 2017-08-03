<template>
    <div>
        <img src="./../assets/logo.png">
        hello hello
        <toast ref="toast"></toast>
        <button @click="showToast">show Toast</button>
    </div>
</template>

<script>
    import Toast from './toast.vue'
    export default{
        components: {
            Toast
        },
        methods: {
            showToast(){
                this.$refs.toast.show('出错啦~~')
            }
        }
    }
</script>

