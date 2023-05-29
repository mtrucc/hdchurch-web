<template>
  <div class="yugao">
    <div class="yugao-content">
      <a-tabs default-active-key="1" class="yugao-tabs">
        <a-tab-pane key="1" title="主日证道"></a-tab-pane>
        <a-tab-pane key="2" title="主日献诗"></a-tab-pane>
      </a-tabs>
      <a-scrollbar
        v-if="true"
        outer-class="yugao-scroll-outer"
        class="yugao-scroll"
      >
        <div class="list">
          <div v-for="item in postList" :key="item.desc" class="list-item">
            <div class="list-image">
              <img :src="item.image[0]" alt="" />
            </div>
            <div class="list-content">
              <div class="list-title">{{ item.title }}</div>

              <!-- <div class="list-descriptio">

                  </div> -->
              <div class="list-info">
                <span class="list-author">{{ item.author }}</span>
                <span class="list-date"> {{ item.date }}</span>
              </div>
              <!-- <a-typography-paragraph
                :ellipsis="{
                  rows: 1,
                }"
                class="list-typography"
              >
                {{ item.desc }}
              </a-typography-paragraph> -->
            </div>
            <!-- <div class="list-image">
              <img :src="item.image[0]" alt="" />
            </div> -->
          </div>
        </div>
      </a-scrollbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import TestImg1 from '@/assets/images/1.jpg';
  import TestImg2 from '@/assets/images/2.jpg';
  import TestImg3 from '@/assets/images/3.jpg';
  import TestImg4 from '@/assets/images/4.jpg';
  import TestImg5 from '@/assets/images/5.jpg';
  import TestImg6 from '@/assets/images/6.jpg';
  import TestImg7 from '@/assets/images/7.jpg';
  import TestImg8 from '@/assets/images/8.jpg';

  import Announcement from './announcement.vue';

  import list from './list.json';

  const postList = ref(list);
</script>

<style scoped lang="less">
  .content {
    display: flex;
    padding: 10px;
    flex: 1;
    overflow: hidden;
    &-left {
      flex: 1;
      // margin-right: 10px;
    }
    &-right {
      flex: 1;
      // margin-left: 10px;
    }
  }
  .yugao {
    width: 100%;
    height: 100%;
    background: var(--color-neutral-1);
    // background-image: url(/src/assets/images/1.jpg);
    // background-color: var(--color-fill-1);
    // background-position: center center;
    // background-repeat: no-repeat;
    // background-size: cover;
    // background: #fff;
    // padding: 10px;
    // border: 1px solid var(--color-border-2);
    border-radius: 4px;
    // border-right: 1px solid var(--color-border-2);
    // padding-right: 10px;
    // margin-right: 10px;
    // background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(3px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;

    :deep(.yugao-scroll-outer) {
      // width: 100%;
      // height: 100%;
      flex: 1;
      // height: 400px;
      // overflow: auto;
      // padding-bottom: 10px;
      margin: 10px;
      overflow: hidden;
    }

    :deep(.yugao-scroll) {
      width: 100%;
      height: 100%;
      // height: 400px;
      overflow: auto;
      // padding-bottom: 10px;
      // padding: 10px;
    }

    :deep(.arco-tabs-content) {
      padding: 0;
      flex: 1;
    }

    &-tabs {
      flex-shrink: 0;
      // height: 100%;
      // overflow: hidden;
      // display: flex;
      // flex-direction: column;
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
      // overflow: auto;
      // height: 400px;
      height: 100%;
      width: 100%;
      flex: 1;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .list {
      display: flex;
      // padding: 10px;
      flex: 1;
      overflow: hidden;

      display: grid;
      //第一个属性：行与行间隔，第二个属性列与列间隔
      grid-gap: 10px 10px;
      //内容整体平均分布
      justify-content: space-between;
      //单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充
      // grid-template-columns: repeat(auto-fill, 115px);
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      width: 100%;
      flex-shrink: 0;

      &-item {
        display: flex;
        width: 100%;
        // height: 65px;
        // margin-bottom: 10px;
        // padding: 10px;
        // border-bottom: 1px solid var(--color-border-2);
        // cursor: pointer;

        // &:hover {
        //   background: var(--color-fill-2);
        // }
      }

      &-image {
        width: 120px;
        height: 75px;
        margin-right: 10px;
        border-radius: 2px;
        overflow: hidden;
        flex-shrink: 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &-title {
        font-size: 14px;
        font-weight: 500;
        // margin-top: 4px;
        margin-bottom: 8px;
        // font-size: 14px;
        // line-height: 20px;
        // padding: 2px 8px;
        color: var(--color-text-1);
        // background: var(--color-fill-3);
        // color: rgb(255 255 255);
        // background: rgb(var(--primary-6));
        // border-radius: 2px;
        // text-decoration: underline;
      }

      &-content {
        flex: 1;
        overflow: hidden;
        // height: 100px;
        display: flex;
        flex-direction: column;
        padding: 6px 0;
        // justify-content: space-between;
      }

      &-typography {
        flex: 1;
        font-size: 12px;
        // line-height: 20px;
        color: var(--color-text-2);
        margin-bottom: 6px;
      }

      &-info {
        display: flex;
        // justify-content: space-between;
        align-items: center;
        font-size: 12px;
        color: var(--color-text-1);
        // font-weight: bold;
      }

      &-author {
        margin-right: 10px;
        color: var(--color-text-2);
        // 下划线
        // text-decoration: underline;
        font-weight: bold;
      }

      &-date {
        color: var(--color-text-2);
        // text-decoration: underline;
      }
    }
  }
</style>
