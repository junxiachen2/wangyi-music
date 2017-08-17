<template>
  <div>
    <top-header></top-header>
    <loading :show="loadingShow"></loading>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  import topHeader from './components/topHeader/topHeader.vue';
  import loading from './components/loading/overall-loading.vue';
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    components:{
      topHeader,
      loading
    },
    computed: {
      ...mapGetters([
        'loadingShow'
      ])
    }
  }
</script>


