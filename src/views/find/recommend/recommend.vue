<template>
  <div class="recommend-area">
    <div id="slider">
      <swiper :options="swiper_option" style="height: 100%;">
        <swiper-slide v-for="(item, index) in slide_list" :key="index"><img :src="item" class="banner-item"
                                                                            alt=""
                                                                            style="width: 100%; height: 100%;">
          <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="recommend-playLists-area">
      <h1 class="title">推荐歌单</h1>
      <v-play-lists :playlists="playlists"></v-play-lists>
    </div>
    <div class="recommend-activitys-area">
      <h1 class="title">独家放送</h1>
      <v-activitys-list :activitys="activitys"></v-activitys-list>
    </div>
    <div class="recommend-mv-area">
      <h1 class="title">最新音乐</h1>
      <v-new-song-list :newSong="newSong"></v-new-song-list>
    </div>
    <div class="recommend-mv-area">
      <h1 class="title">推荐MV</h1>
      <v-mv-list :MVs="MVs"></v-mv-list>
    </div>
    <div class="recommend-mv-area">
      <h1 class="title">主播电台</h1>
      <v-dj-program-list :djProgram="djProgram"></v-dj-program-list>
    </div>
  </div>
</template>
<script>
  import api from '../../../api/index';
  import 'swiper/dist/css/swiper.css';
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import vPlayLists from '../../../components/list/find/recommend/playLists.vue';
  import vActivitysList from '../../../components/list/find/recommend/activitysList.vue';
  import vNewSongList from '../../../components/list/find/recommend/newSong.vue';
  import vMvList from '../../../components/list/find/recommend/mvList.vue';
  import vDjProgramList from '../../../components/list/find/recommend/djProgram.vue';

  const img_list = ['/static/banner/banner1.jpg', '/static/banner/banner2.jpg', '/static/banner/banner3.jpg', '/static/banner/banner4.jpg'];
  export default{
    name: 'v-recommend',
    data(){
      return {
        swiper_option: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 2500
        },
        slide_list: img_list,
        playlists: [],
        activitys: [],
        newSong: [],
        MVs: [],
        djProgram: []
      }
    },
    components: {
      swiper,
      swiperSlide,
      vPlayLists,
      vActivitysList,
      vNewSongList,
      vMvList,
      vDjProgramList
    },
    mounted(){
      this.getPersonalizedResource();
      this.getPrivatecontentResource();
      this.getNewSongResource();
      this.getPersonalizedMvResource();
      this.getDjProgramResource();
    },
    methods: {
      getPersonalizedResource(){
        this.$store.commit('updateLoading', true);
        api.getPersonalized().then((response) => {
          this.playlists = response.data.result;
          this.$store.commit('updateLoading', false);
      })
      },
      getPrivatecontentResource(){
        api.getPrivatecontent().then((response) => {
          this.activitys = response.data.result;
      })
      },
      getNewSongResource(){
        api.getNewSong().then((response) => {
          this.newSong = response.data.result.slice(0, 6);
      })
      },
      getPersonalizedMvResource(){
        api.getPersonalizedMv().then((response) => {
          this.MVs = response.data.result;
      })
      },
      getDjProgramResource() {
        api.getDjProgram().then((response) => {
          this.djProgram = response.data.result.slice(0, 6);
      })
      }
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "recommend.styl";
</style>
