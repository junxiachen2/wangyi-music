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
    </div>
  </transition>
</template>
<script>
  import {Tab, TabItem} from 'vux/src/components/Tab'
  import {Swiper, SwiperItem} from 'vux/src/components/Swiper'

  const list = () => ['个性推荐', '歌单', '排行榜'];
  export default{
    name: 'find',
    components:{
      Tab,
      TabItem,
      Swiper,
      SwiperItem
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
<style>

</style>
