<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in LoveTalkStore.talkList" :key="talk.id">{{talk.title}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
  import {reactive} from 'vue'
  import axios from "axios";
  import {nanoid} from 'nanoid'
  import {useLoveTalkStore} from '../store/LoveTalk';
  const LoveTalkStore = useLoveTalkStore();

  // 方法
  function getLoveTalk(){
    LoveTalkStore.addList()
  }
  
</script>

<style scoped>
  .talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>