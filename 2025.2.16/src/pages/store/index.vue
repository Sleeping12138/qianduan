<template>
    <div class="storeDetails">
        <NavHeader dianpu="店铺"></NavHeader>
        <div class="content">
            <div class="img"></div>
            <div class="foodSort">
                <div class="name">
                    {{ data.title }}
                    <img :src="data.img" class="store-img" />
                </div>
                <van-tabs color="#ffc400">
                    <van-tab v-for="(item, index) of data.storeData" :key="index" :title="item.name">
                        <FoodList :index="index" :foodData="item.data"></FoodList>
                    </van-tab>
                </van-tabs>

            </div>
        </div>
    </div>
</template>

<script setup lang="js" name="store">
import { reactive } from 'vue';
import Header from '../../components/NavHeader.vue';
import FoodList from './components/FoodList.vue';
let data = reactive({
    title: '鱼拿',
    img: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
    storeData: [
        {
            name: "点菜",
            data: {
                content: "点菜",
                items: [
                    {
                        text: "热销套餐",
                        children: [
                            {
                                pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc",
                                title: "隆江猪脚饭",
                                num: 0,
                                price: 25.0,
                                id: 0,
                                add: true,
                            },
                            {
                                pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc",
                                title: "隆江猪脚饭",
                                num: 0,
                                price: 25.0,
                                id: 1,
                                add: true,
                            },
                        ],
                    },
                    {
                        text: "超级折扣",
                        children: [
                            {
                                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                title: "无骨酸菜鱼+肥牛双拼",
                                num: 0,
                                price: 25.0,
                                id: 5,
                                add: true,
                            },
                            {
                                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                                title: "香辣水煮鱼+肥牛双拼",
                                num: 0,
                                price: 25.0,
                                id: 6,
                                add: true,
                            },
                        ],
                    },
                ],
            },
        },
        {
            name: "评价",
            data: {
                content: "评价",
            },
        },
        {
            name: "商家",
            data: {
                content: "商家",
            },
        },
    ],

})
</script>

<style lang="less" scoped>
.storeDetails {
    height: 100%;
    display: flex;
    flex-flow: column;

    .content {
        flex: 1;
        overflow-y: auto;

        .img {
            background: url("../../assets/yuna.jpg") no-repeat center/cover;
            width: 100%;
            height: 150px;
        }

        .foodSort {
            height: 500px;
            background-color: #fff;
            margin-top: -30px;
            border-radius: 20px 20px 0 0;

            .sort {
                margin-top: 10px;
            }

            .name {
                display: flex;
                padding: 20px;
                justify-content: space-between;

                .store-img {
                    width: 80px;
                    height: 80px;
                    border-radius: 10px;
                    margin-top: -30px;
                }
            }
        }
    }
}
</style>