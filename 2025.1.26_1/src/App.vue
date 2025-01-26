<template>
    <Test name="zhangsan" :age="18">
      <h1>hello world</h1>
    </Test>
</template>

<script>
  import Test from './components/Test.vue';

  export default {
    name:'App',
    components:{Test}
  }
</script>

<style>

</style>