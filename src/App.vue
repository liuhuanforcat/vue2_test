<!--
 * @Date: 2024-05-20 21:59:08
 * @LastEditors: liuhuan 1057016137@qq.com
 * @LastEditTime: 2024-08-18 17:02:04
-->


<template>

  <Home />
  <div>
    <button @click="scrollToSection">Scroll to Section 1</button>

    <div id="section1" style="height: 600px; background-color: lightcoral;">Section 1</div>
    <div id="section2" style="height: 600px; background-color: lightseagreen;">Section 2</div>
    <div id="section4" style="height: 600px; background-color: lightblue;">Section 3</div>
    <div id="section5" style="height: 600px; background-color: lightblue;">Section 3</div>
    <div id="section6" style="height: 600px; background-color: lightblue;">Section 3</div>
    <div id="section7" style="height: 600px; background-color: lightblue;">Section 3</div>
    <div id="section8" style="height: 600px; background-color: lightblue;">Section 3</div>
    <div id="section9" style="height: 600px; background-color: lightblue;">Section 3</div>
    <div id="section10" style="height: 600px; background-color: lightblue;">Section 3</div>
    <div id="section11" style="height: 600px; background-color: lightblue;">Section 3</div>
  </div>
</template>
<script lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import { scrollTo } from 'vue-scrollto';
export default {
  methods: {
    scrollToSection() {
      scrollTo('#section10', 3000, {
        easing: 'ease-in-out', // 动画缓动函数
        offset: -50,           // 偏移量
        force: true,           // 强制滚动
      });
    }
  }
};

</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
