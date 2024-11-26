
import {defineStore} from 'pinia'
import {ref} from 'vue'
//第一个参数是唯一storeId
const useCityStore = defineStore("city",()=>{
    // ref包装定义的就是 state
    const cityName = ref("北京")
    const cityId = ref(110100)

    const change = (name,id)=>{
        cityName.value = name
        cityId.value = id
    }
    return {
        cityName,
        cityId,
        change
    }
})

export default useCityStore