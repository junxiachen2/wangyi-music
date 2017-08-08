<template>
    <div class="recommend-area">
        <div id="slider">
            <swiper :options="swiper_option" style="height: 100%;">
                <swiper-slide v-for="(item, index) in slide_list" :key="index"><img :src="item" class="banner-item"
                                                                                    alt=""
                                                                                    style="width: 100%; height: 100%;">
                </swiper-slide>
                <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
            </swiper>
        </div>
        <div class="recommend-playLists-area">
            <h1 class="title">推荐歌单</h1>
        </div>
        <div class="recommend-activitys-area">
            <h1 class="title">独家放送</h1>
        </div>
        <div class="recommend-mv-area">
            <h1 class="title">最新音乐</h1>
        </div>
        <div class="recommend-mv-area">
            <h1 class="title">推荐MV</h1>
        </div>
        <div class="recommend-mv-area">
            <h1 class="title">主播电台</h1>
        </div>
    </div>
</template>
<script>
    require('swiper/dist/css/swiper.css')
    import {swiper, swiperSlide} from 'vue-awesome-swiper';


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
            }
        },
        components: {
            swiper,
            swiperSlide

        }
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "recommend.styl"
</style>
