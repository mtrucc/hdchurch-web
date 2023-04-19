<template>
  <div class="container">
    <Breadcrumb :items="['MarkDown', '编辑']" />
    <div class="content">
      <div id="vditor" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import Vditor from 'vditor';
  import 'vditor/dist/index.css';

  const vditor = ref<Vditor | null>(null);

  onMounted(() => {
    vditor.value = new Vditor('vditor', {
      height: '100%',
      width: '100%',
      mode: 'wysiwyg',
      after: () => {
        // vditor.value is a instance of Vditor now and thus can be safely used here
        vditor.value?.setValue(
          `##### 本堂将于2023年1月1日起，恢复线下礼拜，即刻开放预约通道，欢迎弟兄姊妹<font color='red'>实名制预约</font>。

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
![](http://1304370199.vod2.myqcloud.com/e8895a7fvodbj1304370199/d747d583243791580965269864/MFJhoDoqAtQA.png)`
        );
      },
    });
  });
</script>

<script lang="ts">
  export default {
    name: '403',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 0px 20px;
    height: calc(100vh - 100px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    :deep(.content) {
      flex: 1;
      overflow: hidden;
      display: flex;
      // position: relative;
      // display: flex;
      // flex-direction: column;
      // align-items: center;
      // justify-content: center;
      // height: 100%;
      // text-align: center;
      background-color: var(--color-bg-1);
      border-radius: 8px;
      border: 1px solid #e8e8e8;
    }
  }
</style>
