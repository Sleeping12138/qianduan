<template>
    <e-charts class="chart" :option="option" />
</template>

<script setup lang="js" name="test2">
import { computed, ref } from 'vue';

//#region 
// import { defineProps, useAttrs } from 'vue';
// let props = defineProps(['str'])
// let emit = defineEmits(['handle'])
// // 接收了但是没有使用的变量
// let attrs = useAttrs();
// let slots = defineSlots()
// let name = 'zhangsan';


// console.log(props.str);
// console.log(attrs);
// console.log(slots.hello);

// emit('handle', 'woshizjy')
// let temp1 = ref('zhangsan');
// let temp2 = reactive({
//     name: 'zhangsan',
//     age: 18
// })
// console.log(temp1, temp2);

// let firstName = ref('zhang');
// let lastName = ref('san');
// let fullname = computed(() => {
//     return firstName.value + '---' + lastName.value
// })
//#endregion


let tmepData = ref(['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']);
let option = computed(() => {
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: tmepData.value,
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Email',
                type: 'line',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
        ]
    };
})
</script>

<style lang="less" scoped>
.chart {
    width: 600px;
    height: 500px;
}
</style>