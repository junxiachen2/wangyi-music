<template>
  <transition name="fade">
    <div class="find-page">
      <tab v-model="index"
           :line-width="2"
           active-color="#b72712"
           defaultColor="#666"
           bar-active-color="#b72712">
           <tab-item class="vux-center"
                     :selected="type===item"
                     v-for="(item,index) in tabList"
                     @click="type=item"
                     :key="index"
                     style="background-color: #fdfffe">
             {{item}}
           </tab-item>
      </tab>
      <swiper v-model="index" height="100%" :show-dots="false" class="swiper-container" style="width: 100%;height: 100%;padding-bottom: 90px;background: #eef2f1;">
        <swiper-item :key="1">
          <div class="tab-swiper vux-center">
            <v-recommend></v-recommend>
          </div>
        </swiper-item>
        <swiper-item :key="2">
          <div class="tab-swiper vux-center">
            <v-play-lists></v-play-lists>
          </div>
        </swiper-item>
        <swiper-item :key="3">
          <div class="tab-swiper vux-center">
          3333333333
          </div>
        </swiper-item>
      </swiper>
    </div>
  </transition>
</template>
<script>
  import {Tab, TabItem} from 'vux/src/components/Tab'
  import {Swiper, SwiperItem} from 'vux/src/components/Swiper'
  import vRecommend from './recommend/recommend';
  import vPlayLists from './playLists/playLists';

  const list = () => ['个性推荐', '歌单', '排行榜'];
  export default{
    name: 'find',
    components:{
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      vRecommend,
      vPlayLists
    },
    data(){
      return {
        index: 0,
        tabList: list(),
        type: '个性推荐'
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import 'find.styl';
</style>
