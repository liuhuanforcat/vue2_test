<!--
 * @Date: 2024-05-20 22:07:18
 * @LastEditors: liuhuan 1057016137@qq.com
 * @LastEditTime: 2024-06-16 21:12:38
-->
<template>
  <div ref="editorContainer" class="editor-container"></div>
  <button @click="click">切换</button>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { EditorState ,TransactionSpec } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { basicSetup } from "codemirror"
import { PromQLExtension } from '@prometheus-io/codemirror-promql';
const editorContainer = ref<HTMLElement | null>(null);
const editor = ref<EditorView | null>(null);  // 定义editor为响应式引用
const promQL = new PromQLExtension().setComplete({ remote: { url: 'http://localhost:8099/api/peregrine/proxy/2/' } })
onMounted(() => {
  if (editorContainer.value) {
    editor.value = new EditorView({
      state: EditorState.create({
        doc: 'promql查询语句',
        extensions: [basicSetup, promQL.asExtension()],
      }),
      parent: editorContainer.value,
      // 可以通过 editor.value.state.doc.toString() 获取到编辑框的值
    });
  }
});
const click=()=>{
  if (editor.value) {
    editor.value.dispatch({changes: {from: 0, to:editor.value.state.doc.length, insert: 'test'}})
  }
}

</script>


<style></style>