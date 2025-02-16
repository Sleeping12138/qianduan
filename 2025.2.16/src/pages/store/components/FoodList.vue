<template>
    <div class="foodlist" v-if="index === 0">
        <van-tree-select v-model:main-active-index="data.activeIndex" height="88vw" :items="data.items"
            @click-nav="navClick">
            <template #content>
                <div v-for="(item, index) of data.subItem" :key="index">
                    <FoodListItem :item="item" :handleClick="handleClick" :handleChange="handleChange"></FoodListItem>
                </div>
            </template>
        </van-tree-select>
    </div>
    <div v-else>
        {{ foodData.content }}
    </div>
</template>

<script setup lang="js" name="foodList">
import { defineProps, reactive } from 'vue';
const props = defineProps(['index', 'foodData']);
import FoodListItem from './FoodListItem.vue';

let data = reactive({
    activeIndex: 0,
    items: [],
    subItem: []
})

let initData = () => {
    let array = [];
    props.foodData?.items?.forEach((element, index) => {
        array.push({
            text: element.text
        })
        if (data.activeIndex === index) {
            data.subItem = element.children
        }
    });
    data.items = array
}

let navClick = (index) => {
    data.activeIndex = index;
    initData();
}

let handleClick = (id) => {
    data.subItem.forEach((element, index) => {
        if (element.id === id) {
            element.add = false;
        }
    });
}

let handleChange = (value, detail) => {
    data.subItem.forEach((element, index) => {
        if (element.id === detail.name) {
            element.num = value
        }
    });
}

initData()
</script>

<style lang="less" scoped>
.food-list {
    margin-top: 20px;

    .item-bg {
        padding: 10px;
    }
}

/deep/ .van-tree-select__item--active {
    color: #ffc400;
}

/deep/ .van-sidebar-item--select::before {
    background-color: #ffc400;
}
</style>