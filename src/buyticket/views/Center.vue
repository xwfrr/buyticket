<template>
    <div>
        <!-- center
        <van-button type="primary" @click="handleClick">主要按钮</van-button>
        <van-button type="danger" size="mini" :disabled="true" :loading="true">危险按钮</van-button> -->
 <van-config-provider :theme-vars="themeVars">
          <van-form>
       <van-field name="rate" label="评分">
         <template #input>
        <van-rate v-model="rate" />
      </template>
    </van-field>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
 </van-config-provider>
 <van-share-sheet
  v-model:show="showShare"
  title="立即分享给好友"
  :options="options"
/>
    </div>
</template>

<script>
import { onBeforeRouteLeave } from 'vue-router'
export default {
    async beforeRouteEnter(to, from, next) {
        let isAuthenticated = await localStorage.getItem('username')

        if (isAuthenticated) {
            //this
            next()
        } else {
            next({ name: "Login" })
        }
    },
    methods:{
        handleClick(){
            console.log("click")
        }
    }
}
</script>

<script setup>
import {Button as vanButton} from 'vant'  //export {Button}
import { onBeforeRouteLeave } from 'vue-router'
import { ref, reactive } from 'vue';
import { ConfigProvider as vanConfigProvider,Form as vanForm,Field as vanField,Rate as vanRate,ShareSheet as vanShareSheet} from 'vant';
onBeforeRouteLeave(() => {
    const answer = window.confirm("你确定要离开吗？")

    if (!answer) return false
})
    const rate = ref(4);
    // themeVars 内的值会被转换成对应 CSS 变量
    // 比如 sliderBarHeight 会转换成 `--van-slider-bar-height`
    const themeVars = reactive({
      rateIconFullColor: '#07c160',
      sliderBarHeight: '4px',
      sliderButtonWidth: '20px',
      sliderButtonHeight: '20px',
      sliderActiveBackground: '#07c160',
      buttonPrimaryBackground: '#07c160',
      buttonPrimaryBorderColor: '#07c160',
    });
    const showShare = ref(true);
    const options = [
      [
        { name: '微信', icon: 'wechat' },
        { name: '朋友圈', icon: 'wechat-moments' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' },
      ],
      [
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
        { name: '小程序码', icon: 'weapp-qrcode' },
      ]
    ]
</script>
