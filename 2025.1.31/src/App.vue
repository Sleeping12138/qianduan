<template>
    <Test></Test>
</template>
 
<script>
  import { reactive, ref } from 'vue';
  import Test from './components/Test.vue';

  export default {
    name:'App',
    components:{Test},
  }
  //   setup(props,context){
  //     let name = ref('zhangsan');
  //     let age = ref(18);
  //     let obj = reactive({
  //       a:{
  //         b:{
  //           c:100
  //         }
  //       }
  //     })

  //   //watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
  //   watchEffect(()=>{
  //       const x1 = sum.value
  //       const x2 = person.age
  //       console.log('watchEffect配置的回调执行了')
  //   })

  //   //特殊情况
  //   watch(()=>person.job,(newValue,oldValue)=>{
  //       console.log('person的job变化了',newValue,oldValue)
  //   },{deep:true}) //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效

  //   //情况五：监视reactive定义的响应式数据中的某些属性
  //   watch([()=>person.job,()=>person.name],(newValue,oldValue)=>{
  //     console.log('person的job变化了',newValue,oldValue)
  //   },{immediate:true,deep:true})

  //   //情况四：监视reactive定义的响应式数据中的某个属性
  //   watch(()=>person.job,(newValue,oldValue)=>{
  //     console.log('person的job变化了',newValue,oldValue)
  //   },{immediate:true,deep:true}) 

  //   /* 情况三：监视reactive定义的响应式数据
	// 		若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！
	// 		若watch监视的是reactive定义的响应式数据，则强制开启了深度监视 
  //   */
  //   watch(person,(newValue,oldValue)=>{
  //     console.log('person变化了',newValue,oldValue)
  //   },{immediate:true,deep:false}) //此处的deep配置不再奏效

  //   //情况二：监视多个ref定义的响应式数据
  //   watch([sum,msg],(newValue,oldValue)=>{
  //     console.log('sum或msg变化了',newValue,oldValue)
  //   }) 

  //   //情况一：监视ref定义的响应式数据
  //   watch(sum,(newValue,oldValue)=>{
  //     console.log('sum变化了',newValue,oldValue)
  //   },{immediate:true})

  //   //计算属性——简写
  //   let fullName1 = computed(()=>{
  //       return person.firstName + '-' + person.lastName
  //   })
  //   //计算属性——完整
  //   let fullName2 = computed({
  //       get(){
  //           return person.firstName + '-' + person.lastName
  //       },
  //       set(value){
  //           const nameArr = value.split('-')
  //           person.firstName = nameArr[0]
  //           person.lastName = nameArr[1]
  //       }
  //   })

  //     console.log(props);
  //     console.log(context);
  //     // console.log(obj);

  //     return {
  //       name,age,obj
  //     }
  //   }
  // }
</script>

<style>

</style>