<template>
  <div class="yugao">
    <a-space class="yugao-input">
      <a-input placeholder="请输入证道时间" allow-clear />
      <a-input placeholder="请输入牧师" allow-clear />
      <a-input placeholder="请输入证道题目" allow-clear />
      <a-button type="primary">搜索</a-button>
    </a-space>
    <div class="list">
      <div v-for="item in postList" :key="item.desc" class="list-item">
        <div class="list-image">
          <img :src="item.image[0]" alt="" />
        </div>
        <div class="list-content">
          <div class="list-title">{{ item.title }}</div>
          <!-- <a-typography-paragraph
                    :ellipsis="{
                      rows: 3,
                    }"
                    class="list-typography"
                  >
                    {{ item.desc }}
                  </a-typography-paragraph> -->
          <!-- <div class="list-descriptio">

                  </div> -->
          <div class="list-info">
            <span class="list-author">{{ item.author }}</span>
            <span class="list-date">{{ item.date }}</span>
          </div>
        </div>
      </div>
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
    // background: var(--color-neutral-1);
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
    // padding: 10px;
    margin: 4px;

    &-input {
      margin-bottom: 15px;
    }

    .list {
      width: 100%;
      display: grid;
      //第一个属性：行与行间隔，第二个属性列与列间隔
      grid-gap: 0 20px;
      //内容整体平均分布
      justify-content: space-between;
      //单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充
      // grid-template-columns: repeat(auto-fill, 115px);
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      .item {
        // width: 115px;
        height: 100px;
        display: grid;
        border: 1px solid red;
        justify-content: center;
        align-content: center;
        background-color: rgba(242, 242, 242, 1);
        border: none;
        border-radius: 6px;
        box-shadow: none;
        font-size: 16px;
        color: #aaaaaa;
      }
    }

    .list {
      // display: flex;
      // padding: 0 5px;

      &-item {
        display: flex;
        width: 100%;
        padding: 10px;
        border-bottom: 1px solid var(--color-border-2);
        cursor: pointer;
        align-items: center;

        &:hover {
          background: var(--color-fill-2);
        }
      }

      &-image {
        width: 120px;
        height: 75px;
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
        font-size: 14px;
        font-weight: 500;
        // margin-top: 2px;
        margin-bottom: 8px;
        // font-size: 14px;
        line-height: 20px;
        // padding: 2px 8px;
        color: var(--color-text-1);
        // background: var(--color-fill-3);
        // color: rgb(255 255 255);
        // background: rgb(var(--primary-6));
        // border-radius: 2px;
        // text-decoration: underline;
        // 最多两行 省略号
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
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
