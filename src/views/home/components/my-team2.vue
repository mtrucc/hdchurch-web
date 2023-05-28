<template>
  <div class="kuaisudaohang">
    <div class="kuaisudaohang-title">快速导航</div>
    <div class="kuaisudaohang-content">
      <div
        v-for="item in teamList"
        :key="item.id"
        class="kuaisudaohang-content-item"
        :style="{
          backgroundImage: `url(${item.avatar})`,
        }"
      >
        <div class="kuaisudaohang-content-item-title">{{ item.name }}</div>
      </div>
    </div>
    <div class="kuaisudaohang-title2">最新动态</div>
    <div class="kuaisudaohang-qrCode">
      <Announcement />
      <!-- 这是一段超级超级超级长的文本这是一段超级超级超级长的文本这是一段超级超级超级长的文本这是一段超级超级超级长的文本这是一段超级超级超级长的文本这是一段超级超级超级长的文本这是一段超级超级超级长的文本这是一段超级超级超级长的文本这是一段超级超级超级长的文本这是一段超级超级超级长的文本这是一段超级超级超级长的文本这是一段超级超级超级长的文本这是一段超级超级超级长的文本这是一段超级超级超级长的文本这是一段超级超级超级长的文本这是一段超级超级超级长的文本这是一段超级超级超级长的文本这是一段超级超级超级长的文本 -->
      <!-- <div class="kuaisudaohang-qrCode-img-wrap">
        <img :src="QrImg" alt="" class="kuaisudaohang-qrCode-img" />
      </div>
      <div class="kuaisudaohang-qrCode-img-wrap">
        <img :src="QrImg" alt="" class="kuaisudaohang-qrCode-img" />
      </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
  import QrImg from '@/assets/images/qrcode.png';
  import Announcement from './announcement.vue';

  const teamList = [
    {
      avatar: 'https://swiperjs.com/demos/images/nature-1.jpg',
      id: 1,
      name: '文本文本',
      description: 'Sunday Sermon',
    },
    {
      avatar: 'https://swiperjs.com/demos/images/nature-2.jpg',
      id: 2,
      name: '文本文本',
      description: 'Choral Worship',
    },
    {
      avatar: 'https://swiperjs.com/demos/images/nature-3.jpg',
      id: 3,
      name: '文本文本',
      description: 'Branch of HDChurch',
    },
    {
      avatar: 'https://swiperjs.com/demos/images/nature-4.jpg',
      id: 4,
      name: '文本文本',
      description: 'Contact Us',
    },
  ];
</script>

<style scoped lang="less">
  .kuaisudaohang {
    width: 100%;
    height: 100%;
    background: var(--color-neutral-1);
    // background: #fff;
    // padding: 10px;
    // border: 1px solid var(--color-border-2);
    // border-radius: 4px;
    // border-right: 1px solid var(--color-border-2);
    // padding-right: 10px;
    // margin-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    // background: #fff;
    padding: 10px;

    &-qrCode {
      display: flex;
      flex: 1;
      display: flex;
      justify-content: space-around;
      width: 100%;
      align-items: center;
      overflow: hidden;
      &-img {
        width: 100%;
        &-wrap {
          border: 1px solid var(--color-border-2);
          margin: 0 5px 0 0;
          flex: 1;
          overflow: hidden;
          border-radius: 4px;
          align-items: center;
          // padding: 5px;
          // background: var(--color-fill-1);
          // background-color: var(--color-bg-2);
          // border-radius: 8px;
          // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.050980392156862744);
          // text-align: center;
          // margin-right: 20px;
        }
      }
    }

    &-jieshao {
      font-size: 14px;
      color: var(--color-text-2);
      margin-top: 10px;
      text-align: center;
      display: flex;
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

    &-title2 {
      font-size: 16px;
      font-weight: 500;
      margin-top: 10px;
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
      display: grid;
      //第一个属性：行与行间隔，第二个属性列与列间隔
      grid-gap: 6px 6px;
      //内容整体平均分布
      justify-content: space-between;
      //单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充
      // grid-template-columns: repeat(auto-fill, 115px);
      grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
      width: 100%;
      flex-shrink: 0;
      &-item {
        height: 80px;
        display: grid;
        justify-content: center;
        align-content: center;
        border-radius: 4px;
        background-color: var(--color-fill-1);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;

        // width: 137px;
        // height: 80px;
        // border-radius: 4px;
        // background-color: var(--color-fill-1);
        // background-position: center center;
        // background-repeat: no-repeat;
        // background-size: cover;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        // flex-direction: column;
        // margin-bottom: 6px;
        &-title {
          font-size: 16px;
          font-weight: 500;
          color: #fff;
          // margin-top: 10px;
        }
      }
    }
  }
</style>
