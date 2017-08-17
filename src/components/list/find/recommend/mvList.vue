<template>
  <ul class="MV-area">
    <li style="flex: 0 0 49.5%;"
        class="mv-card-find"
        v-for="(data,index) in MVs"
        :key="index">
      <img v-lazy="data.picUrl+ 'param=400y200'" lazy="loading">
      <h2>{{data.name}}</h2>
    </li>
  </ul>
</template>

<script>
  export default {
    name:'v-mv-lists',
    props:{
      MVs:{
        type:Array,
        default:[]
      }
    }
  }
</script>
<style scoped>
  h2 {
    -webkit-box-orient: vertical;
  }
</style>
