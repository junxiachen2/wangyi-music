<template>
    <div>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>

</script>
<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: all .4s;
    }

    .fade-enter, .fade-leave {
        transform: translate(100%, 0);
    }
</style>
