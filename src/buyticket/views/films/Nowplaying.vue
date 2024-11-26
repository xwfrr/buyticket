<template>
    <div>
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :immediate-check="false" offset="10">
            <van-cell v-for="item in datalist" :key="item.filmId" @click="handleClick(item.filmId)">
                <img :src="item.poster" style="width:100px;float:left;"/>
                <div>{{ item.name }}</div>
                <div>观众评分<span>{{ item.grade }}</span></div>
            </van-cell>
        </van-list>
    </div>
</template>
<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { List as vanList, Cell as vanCell } from 'vant';

const loading = ref(false) //加载状态
const finished= ref(false) //结束状态
const datalist = ref([])
const router = useRouter()

const pageNum = ref(1)//第几页
const total = ref(0) //所有数据
onMounted(async () => {
    const res = await axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6151240",
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16784170161263416169725953","bc":"110100"}',
            'X-Host': 'mall.film-ticket.film.list'
        }
    })
    datalist.value = res.data.data.films
    console.log(res.data.data.films)
    total.value = res.data.data.total
})

const handleClick = (id) => {
    router.push(`/detail/${id}`)
}

const onLoad = async ()=>{
    if(total.value===datalist.value.length){
        //所有数据取完了，
        finished.value = true
        return
    }

    console.log("到底了")
    pageNum.value++
    const res = await axios({
        url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=${pageNum.value}&pageSize=10&type=1&k=6151240`,
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16784170161263416169725953","bc":"110100"}',
            'X-Host': 'mall.film-ticket.film.list'
        }
    })
    //原来基础 追加10条
    datalist.value = [...datalist.value,...res.data.data.films]

    //loading=>false
    loading.value = false
}
</script>


<style scoped lang="scss">
ul {
    li {
        padding: 10px;
    }
}

:deep(.van-cell__value){
    text-align: left;
}
</style>


