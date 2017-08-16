<template>
  <ul class="newSongList-area">
    <li class="newSongList-card-find"
        v-for="(data,index) in newSong"
        @click="jumpAlbumSetail(data.song.album.id)"
        :key="index">
      <img v-lazy="data.song.album.picUrl+ 'param=200y200'" lazy="loading">
      <h2>{{data.name}}</h2>
      <p>{{data.song.artists[0].name}}</p>
    </li>
  </ul>
</template>

<script>
  export default {
    name:'v-new-song-lists',
    props:{
      newSong:{
        type:Array,
        default:[]
      }
    }
  }
</script>
<style>
  h2 {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  p{
    -webkit-box-orient: vertical;
  }
</style>
