<template>
  <div class="container">
    <a-carousel
      :style="{
        width: '600px',
        height: '240px',
      }"
      :auto-play="true"
      indicator-type="dot"
      show-arrow="hover"
    >
      <a-carousel-item v-for="image in images" :key="image">
        <img
          :src="image"
          :style="{
            width: '100%',
          }"
        />
      </a-carousel-item>
    </a-carousel>
    <!-- eslint-disable vue/no-v-html -->
    <!-- <div ref="markdown" class="vditor-reset"></div> -->

    <v-md-preview :text="mdData"></v-md-preview>

    <video
      id="player-container-id"
      width="414"
      height="270"
      preload="auto"
      playsinline
      webkit-playsinline
    >
    </video>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  // @ts-ignore
  // import VditorPreview from 'vditor/dist/method.min';
  // import 'vditor/dist/index.css';
  // @ts-ignore
  import TCPlayer from 'tcplayer.js';
  import 'tcplayer.js/dist/tcplayer.min.css';

  // import { Editor } from '@bytemd/vue-next';
  // import gfm from '@bytemd/plugin-gfm';
  // import 'bytemd/dist/index.css';

  // @ts-ignore
  import VMdPreview from '@kangc/v-md-editor/lib/preview';
  import '@kangc/v-md-editor/lib/style/preview.css';
  // @ts-ignore
  // eslint-disable-next-line import/extensions
  import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
  import '@kangc/v-md-editor/lib/theme/style/github.css';

  // highlightjs
  import hljs from 'highlight.js';

  VMdPreview.use(githubTheme, {
    Hljs: hljs,
  });

  const markdown = ref<HTMLElement | null>(null);
  const markdownHtml = ref<string>('');

  const images = [
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
  ];

  const mdData = `##### 本堂将于2023年1月1日起，恢复线下礼拜，即刻开放预约通道，欢迎弟兄姊妹<font color='red'>实名制预约</font>。

| 堂次  |时间   |直播|回放|
| ------------ | ------------ |-----|-----|
| 第一堂 |07:00 - 08:00 |[直播](/live "点此链接")|[回放](/preach/index/a/1 "点此链接")|
| 第二堂 |09:00 - 10:00  |[直播](/live "点此链接")|[回放](/preach/index/a/1 "点此链接")|
| 第三堂 |11:00 - 12:00  |[直播](/live "点此链接")|[回放](/preach/index/a/1 "点此链接")|
| 第四堂 |14:00 - 15:00  |[直播](/live "点此链接")|[回放](/preach/index/a/1 "点此链接")|

\`请周日礼拜时间进入观看直播\`

#### 第一堂 07:00-08:00 第四堂 14:00-15:00

主礼：韩占慧牧师
证道：申俊伟传道
题目：基督为房角石
经文：[彼得前书2:6-10](http://www.hdchurch.org/bibleapi/?flag=bdqs>2:6-10 "彼得前书2:6-10")
宣召：[诗100](http://www.hdchurch.org/bibleapi/?flag=sp>100 "诗100")
启应：[诗103](http://www.hdchurch.org/bibleapi/?flag=sp>103 "诗103")
诗歌：11, 392, 41

#### 第二堂 09:00-10:00 第三堂 11:00-12:00

主礼：王教佺传道
证道：贺永花牧师
题目：主为你做的是何等大的事
经文：[可5:1-20](http://www.hdchurch.org/bibleapi/?flag=mkfy>5:1-20 "可5:1-20")
宣召：[诗121](http://www.hdchurch.org/bibleapi/?flag=sp>121 "诗121")
启应：[诗139](http://www.hdchurch.org/bibleapi/?flag=sp>139 "诗139")
诗歌：11, 392, 230

#### 请周日扫码或识别下方二维码进入直播间观看
![](http://1304370199.vod2.myqcloud.com/e8895a7fvodbj1304370199/d747d583243791580965269864/MFJhoDoqAtQA.png)`;

  onMounted(() => {
    const url =
      'http://1304370199.vod2.myqcloud.com/bf05aca7vodcq1304370199/d2be5b6c243791581442112917/K2awiD5FLC4A.mp4';
    const player = TCPlayer('player-container-id', {}); // player-container-id 为播放器容器 ID，必须与 html 中一致
    player.src(url); // url 播放地址

    console.log('这不科学啊');
    const dom: any = markdown.value;
    console.log(dom);
    // VditorPreview.preview(dom, mdData, {
    //   cdn: '/vditor',
    // });
    // const md = new MarkdownIt();
    // const markdownData = md.render(mdData);
    // eslint-disable-next-line no-console
    // console.log(markdownData);
    // @ts-ignore
    // console.log(markdown.value);
    // @ts-ignore
    // markdown?.value?.innerHTML = 'markdownData';
    // markdownHtml.value = markdownData;
  });
</script>

<script lang="ts">
  export default {
    name: '404',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 20px;
    // height: 1000px;
  }
</style>
