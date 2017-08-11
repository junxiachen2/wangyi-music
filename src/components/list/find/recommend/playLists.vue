<template>
    <ul class="playLists-area">
        <li class="playlist-card-find"
            v-for="(data,index) in playlists"
            @click="jumpPlayListsDetail(data.id)"
            :key="index">
            <img v-lazy="data.picUrl+'param=200y200'" lazy="loading">
            <h2>{{data.name}}</h2>
        </li>
    </ul>
</template>

<script>
    export default{
        name: 'v-play-lists',
        props: {
            playlists: {
                type: Array,
                default: []
            }
        },
        methods: {
            jumpPlayListsDetail(id){
                // 跳转
            }
        }
    }
</script>
<style scoped>
    h2 {
        -webkit-box-orient: vertical;
    }
</style>

