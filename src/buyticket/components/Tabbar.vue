
<template>
    <div class="tabbar">
        <ul>
            <router-link custom to="/films" v-slot="{isActive,navigate}">
                <li :class="isActive?'kerwinactive':''" @click="navigate">电影</li>
            </router-link>

            <router-link custom to="/cinemas" v-slot="{isActive,navigate}">
                <li :class="isActive?'kerwinactive':''" @click="navigate">影院</li>
            </router-link>

            <router-link custom to="/center" v-slot="{isActive,navigate}">
                <li :class="isActive?'kerwinactive':''" @click="navigate">我的</li>
            </router-link>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.kerwinactive{
    color:red;
}
.tabbar{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: white;
    z-index:100;
    ul{
        display: flex;
        li{
            flex:1;
        }
    }
}
</style>

