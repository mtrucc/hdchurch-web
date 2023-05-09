<template>
  <a-card class="general-card" title="主日预告" :body-style="{ padding: '0' }">
    <v-md-preview :text="mdData"></v-md-preview>
  </a-card>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  // @ts-ignore
  import VMdPreview from '@kangc/v-md-editor/lib/preview';
  import '@kangc/v-md-editor/lib/style/preview.css';
  // @ts-ignore
  // eslint-disable-next-line import/extensions
  import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
  // import '@kangc/v-md-editor/lib/theme/style/github.css';

  // highlightjs
  import hljs from 'highlight.js';

  VMdPreview.use(githubTheme, {
    Hljs: hljs,
  });

  const mdData = ref(``);

  fetch('yugao2.md')
    .then((res) => res.text())
    .then((data) => {
      mdData.value = data;
    });
</script>

<style scoped lang="less">
  .general-card {
    .arco-list-item {
      // height: 72px;
      // padding-left: 0;
      // padding-bottom: 12px;
      // border-bottom: 1px solid var(--color-neutral-3);
      // &:last-child {
      //   border-bottom: none;
      // }
      .arco-list-item-meta {
        padding: 0;
      }
    }
  }
</style>
