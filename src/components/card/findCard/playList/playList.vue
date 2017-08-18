<template>
  <div class="playlist-find" @click="jumpPlayListsDetail(data.id)">
    <img v-lazy="data.coverImgUrl + '?param=500y500'" lazy="loading">
    <h1>{{data.name}}</h1>
    <p>by {{data.creator.nickname}}</p>
  </div>
</template>

<script>
  export default{
    name: 'v-play-list',
    props:{
      data:{
        type: Object
      }
    }
  }
</script>
<style scoped>
  .playlist-find img{
    width: 100%;
  }
  .playlist-find h1{
    font-size: 12px;
    font-weight: normal;
    color: #2a2e2d;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height: 1.2rem;
    margin: 0 3px;
  }
  .playlist-find p{
    font-size: 10px;
    color: #6c6e6d;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height: 1.2rem;
    margin: 0 3px;
  }
</style>
