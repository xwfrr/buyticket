
<template>
    <div>
        <button @click="handleBack">返回</button>
        detail

        <h3>猜你喜欢</h3>
        <ul>
            <li @click="handleClick">电影1</li>
        </ul>
    </div>
</template>

<script setup>
import { onMounted,onBeforeMount,onBeforeUnmount } from 'vue';
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import useTabbarStore from '../store/tabbarStore';

const route = useRoute()
const router = useRouter()
const store = useTabbarStore()

onBeforeMount(()=>{
    // store.isTabbarShow = false

    // store.$patch({
    //     isTabbarShow:false
    // })
    store.change(false)
})

onBeforeUnmount(()=>{
    // store.isTabbarShow = true
    // store.$patch({
    //     isTabbarShow:true
    // })

    store.change(true)

    // store.$reset()
})

onMounted(() => {
    console.log("接受上一个页面传来的参数", route.params.myid, "带着id参数请求后端接口")
})

const handleBack = () => {
    router.back()
}

const handleClick = () => {
    router.push(`/detail/6789`)
}

onBeforeRouteUpdate((to,from)=>{
    console.log("接受上一个页面传来的参数", to.params.myid, "带着id参数请求后端接口")
})
</script>

