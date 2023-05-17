<template>
  <div class="yugao">
    <div class="yugao-title">主日预告</div>
    <div class="yugao-content">
      <a-scrollbar outer-class="yugao-scroll" class="yugao-scroll">
        <v-md-preview :text="mdData"></v-md-preview>
      </a-scrollbar>
    </div>
  </div>
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
  .yugao {
    width: 100%;
    height: 100%;
    // background: var(--color-neutral-1);
    // background-image: url(/src/assets/images/1.jpg);
    // background-color: var(--color-fill-1);
    // background-position: center center;
    // background-repeat: no-repeat;
    // background-size: cover;
    // background: #fff;
    padding: 10px;
    // border: 1px solid var(--color-border-2);
    border-radius: 4px;
    // border-right: 1px solid var(--color-border-2);
    // padding-right: 10px;
    // margin-right: 10px;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(3px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;

    :deep(.yugao-scroll) {
      width: 100%;
      height: 100%;
      overflow: auto;
    }

    &-title {
      font-size: 16px;
      font-weight: 500;
      margin-top: 2px;
      margin-bottom: 10px;
      font-size: 14px;
      line-height: 20px;
      padding: 2px 8px;
      color: var(--color-text-2);
      background: var(--color-fill-3);
      color: rgb(255 255 255);
      background: rgb(var(--primary-6));
      // border-radius: 2px;
    }

    &-content {
      overflow: auto;
      // height: 400px;
      width: 100%;
      flex: 1;
      overflow: hidden;
    }
  }
</style>
