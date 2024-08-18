/*
 * @Date: 2024-05-20 21:59:08
 * @LastEditors: liuhuan 1057016137@qq.com
 * @LastEditTime: 2024-08-18 16:30:34
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto';
createApp(App).mount('#app')
createApp(App).use(VueScrollTo)