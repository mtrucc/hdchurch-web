<template>
  <div class="yugao">
    <div class="yugao-content">
      <a-tabs default-active-key="1" trigger="hover" class="yugao-tabs">
        <a-tab-pane key="1" title="主日证道">
          <div class="list">
            <a-scrollbar outer-class="yugao-scroll" class="yugao-scroll">
              <div v-for="item in postList" :key="item.desc" class="list-item">
                <div class="list-image">
                  <img :src="item.image[0]" alt="" />
                </div>
                <div class="list-content">
                  <div class="list-title">{{ item.title }}</div>
                  <a-typography-paragraph
                    :ellipsis="{
                      rows: 3,
                    }"
                    class="list-typography"
                  >
                    {{ item.desc }}
                  </a-typography-paragraph>
                  <!-- <div class="list-descriptio">

                  </div> -->
                  <div class="list-info">
                    主讲人：<span class="list-author">{{ item.author }}</span>
                    时间：<span class="list-date">{{ item.date }}</span>
                  </div>
                </div>
              </div>
            </a-scrollbar>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" title="主日献诗">
          <div class="list">
            <a-scrollbar outer-class="yugao-scroll" class="yugao-scroll">
              <div v-for="item in 5" :key="item" class="list-item">
                <div class="list-image">
                  <img :src="TestImg5" alt="" />
                </div>
                <div class="list-content">
                  <div class="list-title"
                    >[2023年5月21日主日献唱]《仰望主》</div
                  >
                  <a-typography-paragraph
                    :ellipsis="{
                      rows: 3,
                    }"
                    class="list-typography"
                  >
                    仰望主，仰望主，仰望主的荣光重担脱落。仰望主，仰望主，仰望主的荣光，心得自由。
                    仰望主，仰望主，仰望主的荣光重担脱落。仰望主，仰望主，仰望主的荣光，心得自由。
                    我主在宝座上掌管世间万有，来认识祂大能权柄，疑惑再不会久留。
                    仰望主，仰望主，仰望主的荣光重担脱落。仰望主，仰望主，仰望主的荣光，心得自由。
                    我主在宝座上掌管世间万有，来认识祂大能权柄，平安必代替忧愁。
                    仰望主，仰望主，仰望主的荣光重担脱落，仰望主，仰望主，仰望主的荣光，心得自由。
                  </a-typography-paragraph>
                  <!-- <div class="list-descriptio">

                  </div> -->
                  <div class="list-info">
                    诗班：<span class="list-author">大诗班</span> 时间：<span
                      class="list-date"
                      >2023年05月26日</span
                    >
                  </div>
                </div>
              </div>
            </a-scrollbar>
          </div>
        </a-tab-pane>
      </a-tabs>
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

  import list from './list.json';

  const postList = ref(list);
</script>

<style scoped lang="less">
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

    :deep(.yugao-scroll) {
      width: 100%;
      // height: 100%;
      height: 500px;
      overflow: auto;
    }

    :deep(.arco-tabs-content) {
      padding: 0;
      flex: 1;
    }

    &-tabs {
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
      overflow: auto;
      // height: 400px;
      // width: 100%;
      // flex: 1;
      overflow: hidden;
    }

    .list {
      display: flex;
      padding: 0 5px;

      &-item {
        display: flex;
        width: 100%;
        padding: 10px;
        border-bottom: 1px solid var(--color-border-2);
        cursor: pointer;

        &:hover {
          background: var(--color-fill-2);
        }
      }

      &-image {
        width: 180px;
        height: 105px;
        margin-right: 10px;
        border-radius: 4px;
        overflow: hidden;
        flex-shrink: 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &-title {
        font-size: 16px;
        // font-weight: 500;
        // margin-top: 2px;
        margin-bottom: 4px;
        // font-size: 14px;
        line-height: 20px;
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
        font-size: 14px;
        color: var(--color-text-1);
        // font-weight: bold;
      }

      &-author {
        margin-right: 10px;
        color: var(--color-text-2);
        // 下划线
        text-decoration: underline;
        // font-weight: bold;
      }

      &-date {
        color: var(--color-text-2);
        text-decoration: underline;
      }
    }
  }
</style>
