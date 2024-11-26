<template>
    <div>
        <!-- 插槽-路由容器 -->
        <router-view></router-view>
        <!-- <router-view></router-view>
        <router-view></router-view> -->

        <Tabbar v-show="store.isTabbarShow"></Tabbar>
    </div>
</template>

<script setup>
import Tabbar from './components/Tabbar.vue'
import useTabbarStore from './store/tabbarStore';

const store = useTabbarStore()
// console.log(store)

// const {isTabbarShow} = storeToRefs(store)
// store 是一个reactive包装的对象， toRefs
// storeTorefs 
</script>

<!-- <script>
import useTabbarStore from './store/tabbarStore';

export default{
    computed:{
        ...mapState(useTabbarStore,["isTabbarShow"])
    },
    methods:{
        ...mapActions(useTabbarStore,["change"])
    }
}
</script> -->
<style>
*{
    margin:0;
    padding:0;
}
ul{
    list-style: none;
}
</style>
