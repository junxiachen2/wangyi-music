<template>
  <div class="playLists-area">
    <button-tab v-model="index">
      <button-tab-item @on-item-click="selectType()">最新</button-tab-item>
      <button-tab-item @on-item-click="selectType()">最热</button-tab-item>
    </button-tab>
    <div class="playLists">
      <ul>
        <li v-for="(data,index) in playlists">
          <v-play-list :data="data"></v-play-list>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import api from '../../../api/index';
  import {ButtonTab, ButtonTabItem} from 'vux';
  import vPlayList from '../../../components/card/findCard/playList/playList';

  export default{
    name: 'v-play-lists',
    data(){
      return {
        index: 0,
        keys: 'new',
        playlists: []
      }
    },
    mounted(){
      this.getTopPlaylistResource();
    },
    methods: {
      selectType(){
        this.keys = this.index ? 'hot' : 'new';
        this.getTopPlaylistResource();
      },
      getTopPlaylistResource(){
        this.$store.commit('updateLoading', true);
        api.getTopPlaylistResource(this.keys, 20, 0).then((response) => {
          this.playlists = response.data.playlists;
          this.$nextTick(() => {
            this.$store.commit('updateLoading', false);
        })
      })
      }
    },
    components: {
      ButtonTab,
      ButtonTabItem,
      vPlayList
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "playLists.styl";
</style>
