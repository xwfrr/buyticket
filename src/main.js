import { createApp } from 'vue'
import App from './buyticket/App.vue'
import router from './buyticket/router'
import { createPinia } from 'pinia'
import 'vant/lib/index.css';


//导入配置文件
import './buyticket/util/config'
var app = createApp(App)

app.use(router) //注册路由插件
app.use(createPinia()) //注册pinia插件
app.mount('#app')
