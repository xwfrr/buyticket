
<template>
    <div>
        <van-nav-bar title="影院" >
            <template #left>
                <div @click="handleChange">{{cityStore.cityName}}</div>
            </template>
            <template #right>
                <van-icon name="search" size="22" color="black"/>
            </template>
        </van-nav-bar>

        <!-- {{store.test}} -->
        <select v-model="type">
            <option :value="1">App订票</option>
            <option :value="0">前台兑换</option>
        </select>
        <ul>
            <li v-for="data in store.filterCinemaList(type)" :key="data.cinemaId">
                {{ data.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import useCinemaStore from '../store/cinemaStore';
import useCityStore from '../store/cityStore';
import { NavBar as vanNavBar,Icon as vanIcon} from 'vant';
import {useRouter} from 'vue-router'
const router = useRouter()
const type = ref(1)
const store = useCinemaStore()

const cityStore = useCityStore()
onMounted(() => {
    // console.log(store.getters['CinemaModule/filterCinemaList'])
    if (store.cinemaList.length === 0) {
        //请求数据
        store.getCinemaList()

        //隐藏代码
    } else {
        console.log("缓存")
    }
})

const handleChange = ()=>{
    router.push(`/city`)

    //清空 影院数据

    store.clearCinemaList()
}
</script>
<style scoped>
li {
    padding: 10px;
}
</style>
