<template>
  <div>
    <top-header></top-header>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  import topHeader from './components/header/header.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    components:{
      topHeader
    },
    computed: {
//      ...mapGetters([
//        'songList',
//        'showDetail',
//        'loadingShow'
//      ])
    }
  }
</script>


