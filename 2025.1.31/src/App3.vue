<template>
    <Suspense>
        <template v-slot:default>
            <Test></Test>
        </template>
        <template v-slot:fallback>
            <Test></Test>
        </template>
      </Suspense>
</template>

<script>
  // import Test from './components/Test.vue';
  import { defineAsyncComponent } from 'vue';
  const Test = defineAsyncComponent(()=>import('./components/Test4.vue'))
  export default {
    name:'App',
    components:{Test}
  }
</script>

<style>

</style>