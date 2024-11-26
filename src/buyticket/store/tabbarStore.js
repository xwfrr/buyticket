
import {defineStore} from 'pinia'
import {ref} from 'vue'
//第一个参数是唯一storeId
const useTabbarStore = defineStore("tabbar",()=>{
    // ref包装定义的就是 state
    const isTabbarShow = ref(true)

    const change = (value)=>{
        isTabbarShow.value = value
    }
    return {
        isTabbarShow,
        change
    }
})

export default useTabbarStore