
<template>
    <div>
        <van-index-bar :index-list="indexList">
            <div v-for="item in datalist" :key="item.type">
                <van-index-anchor :index="item.type" />
                <van-cell :title="data.name" v-for="data in item.list" :key="data.cityId" @click="handleChange(data)"/>

            </div>
        </van-index-bar>
    </div>
</template>
<script setup>
import axios from 'axios'
import { onMounted,ref ,computed} from 'vue'
import _ from 'lodash'
import { IndexBar as vanIndexBar, IndexAnchor as vanIndexAnchor, Cell as vanCell } from 'vant';
import useCityStore from '../store/cityStore'
import {useRouter } from 'vue-router'
const router = useRouter()
const store = useCityStore()
const datalist = ref([])
onMounted(async () => {
    var res = await axios({
        url: "https://m.maizuo.com/gateway?k=20302",
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"173095870614674988422397953"}',
            'X-Host': 'mall.film-ticket.city.list'
        }
    })
    // console.log(res.data.data.cities)

    datalist.value = filterCity(res.data.data.cities)
})

const indexList = computed(()=>datalist.value.map(item=>item.type))


const filterCity = (cities) => {
    //分组 -- lodash 
    cities.sort((item1, item2) => item1.pinyin.substring(0, 1).toUpperCase().charCodeAt() - item2.pinyin.substring(0, 1).toUpperCase().charCodeAt())

    var groupObj = _.groupBy(cities, item => item.pinyin.substring(0, 1).toUpperCase())
    //    console.log(Object.keys({a:1,b:2}))

    var newCities = []
    for (let i in groupObj) {
        // console.log(i)
        newCities.push({
            type: i,
            list: groupObj[i]
        })
    }

    console.log(newCities)
    return newCities
}

const handleChange = ({name,cityId})=>{
    store.change(name,cityId)

    //返回
    router.go(-1)
}

</script>