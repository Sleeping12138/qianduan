<template>
    <div>
      <!-- 就是子组件不需要进行接收 -->
      <!-- <Student @getStudentName="getStudentName"></Student> -->
      <!-- 子组件需要进行接收 -->
      <!-- <Student :getName="getName"></Student> -->
      <!-- <Student ref="student"></Student> -->
       <!-- <Student v-on:getStudentName.once="getStudentName"></Student> -->

       <!-- 给组件设置普通事件时，需要使用native -->
       <!-- <Student @click.native="stu"></Student> -->
      <School></School>
      <Student></Student>
    </div>
</template>

<script>
  import School from './components/School.vue';
  import Student from './components/Student.vue';

  export default {
    name:'App',
    components:{Student,School},
    mounted(){
      // this.$refs.student.$on('getName',function(name){
      //   console.log(this); 
      // });
    },  
    methods: {
      // getStudentName(name){
      //   console.log(name); 
      // },
      // stu(){
      //   console.log('hello world');
      // }
      // getName(name){
      //   console.log(name);
      // }
    },
    
  }
</script>

<style>

</style>