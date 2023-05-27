<template>
  <div class="kuaisudaohang">
    <!-- <div class="kuaisudaohang-title">快速导航</div> -->
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
    <!-- <div class="kuaisudaohang-title2">最新动态</div> -->
    <div class="kuaisudaohang-qrCode">
      <div class="time">{{ time }}</div>
      <div class="welcome">欢迎光临北京市基督教海淀堂</div>
      <!-- <Announcement /> -->
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
  import QrImg from '@/assets/images/MFJhoDoqAtQA.png';
  import TestImg1 from '@/assets/images/1.jpg';
  import TestImg2 from '@/assets/images/2.jpg';
  import TestImg3 from '@/assets/images/3.jpg';
  import TestImg4 from '@/assets/images/4.jpg';
  import TestImg5 from '@/assets/images/5.jpg';
  import TestImg6 from '@/assets/images/6.jpg';
  import TestImg7 from '@/assets/images/7.jpg';
  import TestImg8 from '@/assets/images/8.jpg';


  import Announcement from './announcement.vue';

  const teamList = [
    {
      avatar: TestImg4,
      id: 1,
      name: '主日证道',
      description: 'Sunday Sermon',
    },
    {
      avatar: TestImg5,
      id: 2,
      name: '主日献诗',
      description: 'Choral Worship',
    },
    {
      avatar: TestImg6,
      id: 3,
      name: '初次来访',
      description: 'Branch of HDChurch',
    },
    {
      avatar: TestImg3,
      id: 4,
      name: '基本要道',
      description: 'Contact Us',
    },
    {
      avatar: TestImg3,
      id: 4,
      name: '团契介绍',
      description: 'Contact Us',
    },
    {
      avatar: TestImg3,
      id: 4,
      name: '分堂聚会点',
      description: 'Contact Us',
    },
    {
      avatar: TestImg3,
      id: 4,
      name: '事工动态',
      description: 'Contact Us',
    },
    {
      avatar: TestImg3,
      id: 4,
      name: '预留',
      description: 'Contact Us',
    },
  ];

  // const time = new Date().toLocaleString();

  // 返回 2023年05月25日 星期三 星期前要带空格
  const time = new Date().toLocaleDateString('zh', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'long',
  });


</script>

<style scoped lang="less">
  .kuaisudaohang {
    width: 100%;
    height: 100%;
    // background: var(--color-neutral-1);
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
    // padding: 10px;

    // background-image: url(/src/assets/images/1.jpg);
    // background-color: var(--color-fill-1);
    // background-position: center center;
    // background-repeat: no-repeat;
    // background-size: cover;

    // background-color: rgba(255, 255, 255, 0.2);
    // backdrop-filter: blur(3px);

    .time {
      font-size: 20px;
      color: var(--color-text-1);
      margin-top: 10px;
      text-align: center;
      font-weight: 500;
    }

    .welcome {
      font-size: 14px;
      color: var(--color-text-2);
      margin-top: 10px;
      text-align: center;
    }

    &-qrCode {
      display: flex;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      align-items: center;
      overflow: hidden;

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
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      width: 100%;
      flex-shrink: 0;
      &-item {
        height: 75px;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
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
          // font-size: 18px;
          // font-weight: 500;
          // color: #fff;
          font-size: 16px;
          font-weight: 400;
          // color: #7c6565;
          // color: #d8d8d8;
          color: var(--color-text-2);
          padding: 3px 5px;
          background: rgb(var(--gray-3), 0.7);
          border-radius: 2px;
          // background: #9e6a27;
          // width: 100%;
          // height: 100%;
          // background-color: rgb(255 255 255 / 10%);
          // backdrop-filter: blur(3px);
          // text-align: center;
          // display: flex;
          // justify-content: center;
          // align-items: center;
          // margin-top: 10px;
        }
      }
    }
  }
</style>
