<template>
  <ul class="news-list">
    <li>编号：{{id}}</li>
    <li>标题：{{title}}</li>
    <li>内容：{{content }}</li>
  </ul>
  <input type="text" v-model="text">
</template>

<script setup lang="ts" name="About">
  import { toRefs,defineProps, ref} from 'vue';
  import {useRoute} from 'vue-router';

  defineProps(['id','title','content'])
  let text = ref('');
  const route = useRoute();
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