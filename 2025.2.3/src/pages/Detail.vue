<template>
  <ul class="news-list">
    <li>编号：{{ route.query.id }}</li>
    <li>标题：{{ route.query.title }}</li>
    <li>内容：{{ route.query.content }}</li>
  </ul>
</template>

<script setup lang="ts" name="About">

  import {useRoute} from 'vue-router';
  const route = useRoute();

  defineProps(['id','title','content'])

  console.log(route);
</script>

<style scoped>
  .news-list {
    list-style: none;
    padding-left: 20px;
  }

  .news-list>li {
    line-height: 30px;
  }
</style>