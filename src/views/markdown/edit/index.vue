<template>
  <div class="container">
    <Breadcrumb :items="['MarkDown', '编辑']" />
    <div class="content">
      <v-md-editor
        v-model="markdownHtml"
        height="100%"
        :disabled-menus="[]"
        @upload-image="handleUploadImage"
      ></v-md-editor>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';

  import { uploadFile } from '@/api/file';

  // @ts-ignore
  import VMdEditor from '@kangc/v-md-editor/lib/codemirror-editor';
  import '@kangc/v-md-editor/lib/style/codemirror-editor.css';
  // @ts-ignore
  // eslint-disable-next-line import/extensions
  import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
  import '@kangc/v-md-editor/lib/theme/style/github.css';

  // highlightjs
  import hljs from 'highlight.js';

  // codemirror 编辑器的相关资源
  import Codemirror from 'codemirror';
  // mode
  import 'codemirror/mode/markdown/markdown';
  import 'codemirror/mode/javascript/javascript';
  import 'codemirror/mode/css/css';
  import 'codemirror/mode/htmlmixed/htmlmixed';
  import 'codemirror/mode/vue/vue';
  // edit
  import 'codemirror/addon/edit/closebrackets';
  import 'codemirror/addon/edit/closetag';
  import 'codemirror/addon/edit/matchbrackets';
  // placeholder
  import 'codemirror/addon/display/placeholder';
  // active-line
  import 'codemirror/addon/selection/active-line';
  // scrollbar
  // import 'codemirror/addon/scroll/simplescrollbars';
  // import 'codemirror/addon/scroll/simplescrollbars.css';
  // style
  import 'codemirror/lib/codemirror.css';

  VMdEditor.Codemirror = Codemirror;
  VMdEditor.use(githubTheme, {
    Hljs: hljs,
  });

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

  const markdownHtml = ref<string>(mdData);

  onMounted(() => {});

  function handleUploadImage(event: any, insertImage: any, files: any) {
    console.log(event, insertImage, files);
    // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
    if (files && files[0]) {
      const formData = new FormData();

      formData.append('file', files[0]);

      uploadFile(formData).then((res: any) => {
        if (res.code === 200) {
          insertImage({
            url: `/api/file/download?path=${res.data.path}`,
            desc: res.data.originalname,
            // width: 'auto',
            // height: 'auto',
          });
        }
      });
    }
  }
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
