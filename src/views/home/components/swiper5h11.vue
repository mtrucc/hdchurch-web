<template>
  <div class="sw11iper" title="快速导航" :body-style="{ padding: '0' }">
    <!-- <div class="swiper-title"> 网站公告 </div> -->
    <!-- <a-alert class="swiper-banner" banner>这是一条公告</a-alert> -->
    <div class="s11wiper-container-wrapper">
      <div class="gallery11-top">
        <icon-left class="slide11Prev-btn" />
        <icon-right class="slide11Next-btn" />
        <swiper
          :loop="true"
          :navigation="{
            prevEl: '.slide11Prev-btn',
            nextEl: '.slide11Next-btn',
          }"
          :thumbs="{ swiper: thumbsSwiper11 }"
          :modules="modules"
          class="s11wiper-container"
        >
          <swiper-slide v-for="item in imageList" :key="item">
            <div class="sw11iper-slide-content">
              <div class="sw11iper-slide-caption-wrap">
                <div class="sw11iper-slide-caption">
                  <div class="sw11iper-slide-caption-title-line">
                    <div class="sw11iper-slide-caption-title"
                      >北京市基督教海淀堂2023年05月21日礼拜</div
                    >
                  </div>
                  <div class="sw11iper-slide-caption-line"></div>
                  <div class="sw11iper-slide-caption-desc">
                    北京市基督教海淀堂2023年05月21日礼拜信息如下：第一堂、第二堂、第三堂、第四堂
                  </div>
                </div>
              </div>
              <img class="sw11iper-slide-img" :src="item" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="gallery11-thumbs">
        <swiper
          direction="vertical"
          :watch-slides-visibility="true"
          :watch-overflow="true"
          :loop="false"
          :space-between="4"
          :slides-per-view="2"
          :free-mode="true"
          :watch-slides-progress="true"
          :modules="modules"
          class="s11wiper-container"
          @swiper="setThumbsSwiper11"
        >
          <swiper-slide v-for="item in imageList" :key="item + 123">
            <div class="list-item">
              <div class="list-image">
                <img :src="item" alt="" />
              </div>
              <div class="list-content">
                <div class="list-title">放下重担 仰望耶稣</div>
                <div class="list-info">
                  <span class="list-author">范国兴</span>
                  <span class="list-date">2021-05-23</span>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import TestImg1 from '@/assets/images/1.jpg';
  import TestImg2 from '@/assets/images/2.jpg';
  import TestImg3 from '@/assets/images/3.jpg';
  import TestImg4 from '@/assets/images/4.jpg';
  import TestImg5 from '@/assets/images/5.jpg';
  import TestImg6 from '@/assets/images/6.jpg';
  import TestImg7 from '@/assets/images/7.jpg';
  import TestImg8 from '@/assets/images/8.jpg';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/free-mode';
  import 'swiper/css/navigation';
  import 'swiper/css/thumbs';

  // import required modules
  import { FreeMode, Navigation, Thumbs } from 'swiper';

  const thumbsSwiper11: any = ref(null);

  const setThumbsSwiper11 = (swiper: any) => {
    thumbsSwiper11.value = swiper;
  };

  const modules = [Navigation, Thumbs, FreeMode];

  // const imageList = [
  //   'https://swiperjs.com/demos/images/nature-1.jpg',
  //   'https://swiperjs.com/demos/images/nature-2.jpg',
  //   'https://swiperjs.com/demos/images/nature-3.jpg',
  //   'https://swiperjs.com/demos/images/nature-4.jpg',
  //   'https://swiperjs.com/demos/images/nature-5.jpg',
  //   'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  //   'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  //   'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
  // ];

  const imageList = [
    TestImg1,
    TestImg2,
    TestImg3,
    TestImg4,
    TestImg5,
    TestImg6,
    TestImg7,
    TestImg8,
  ];
</script>

<style scoped lang="less">
  .sw11iper {
    // border-radius: 4px;
    border: none;
    // background-color: var(--color-fill-1);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

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
      color: #ffffff;
      background: rgb(var(--primary-6));
    }

    &-banner {
      margin-bottom: 10px;
    }
  }
  .gallery11-top {
    position: relative;
    width: 100%;
    overflow: hidden;
    // flex: 1;
    height: 200px;
    flex-shrink: 0;
    @media (min-width: 768px) {
      // flex: 1;
      // flex: auto;
      // height: 100%;
      // margin-right: 4px;
    }
  }

  .gallery11-thumbs {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin-top: 4px;
    flex: 1;
    // @media (min-width: 768px) {
    //   width: 180px;
    //   // height: 100%;
    //   padding: 0;
    //   margin-top: 0px;
    // }
    .sw11iper-wrapper {
      flex-direction: row;
      // @media (min-width: 768px) {
      //   flex-direction: column;
      // }
    }
    .sw11iper-slide {
      width: 25%;
      flex-flow: row nowrap;
      border-radius: 4px;
      @media (min-width: 768px) {
        flex-flow: column nowrap;
        width: 100%;
      }
      height: 100%;
      opacity: 0.75;
      cursor: pointer;
    }
    .sw11iper-slide-thumb-active {
      opacity: 1;
    }
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
      height: 100%;
      align-items: center;
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
      width: 100px;
      height: 65px;
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
</style>

<style lang="less">
  .slide11Prev-btn {
    position: absolute;
    top: 50%;
    z-index: 100;
    left: 0px;
    font-size: 30px;
    line-height: 0;
    margin: -20px 0;
    color: #fff;
  }
  .slide11Next-btn {
    position: absolute;
    top: 50%;
    z-index: 100;
    right: 0px;
    font-size: 30px;
    line-height: 0;
    margin: -20px 0;
    color: #fff;
  }
  .s11wiper-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 4px;

    :deep(.swiper-slide) {
      background: none;
    }

    .swiper-slide {
      background: none;
    }

    // @media (min-width: 768px) {
    //   min-height: 320px;
    // }
    &-wrapper {
      display: flex;
      flex-flow: column nowrap;
      flex: 1;
      overflow: hidden;
      // @media (min-width: 768px) {
      //   flex-flow: row nowrap;
      // }
      height: 100%;
      width: 100%;
    }
  }

  .sw11iper-button {
    &-next,
    &-prev {
      color: #fff;
    }
  }

  .sw11iper-slide {
    overflow: hidden;
    // text-align: center;
    background-size: cover;
    background-position: center;
    background-color: #fff;

    &-img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    &-content {
      height: 100%;
      width: 100%;
      border-radius: 4px;
      border: none;
    }

    &-caption {
      // background: rgb(255 255 255 / 90%);
      // padding: 10px;
      min-width: 200px;
      border: none;
      border-radius: 4px;
      color: #fff;
      display: flex;
      flex-direction: column;

      // background: rgb(var(--color-fill-1-rgb) / 0.5);
      &-wrap {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 10px;
        width: 100%;
        display: flex;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0) 0,
          rgb(0 0 0 / 40%) 90%
        );
      }

      &-title {
        font-size: 16px;
        // margin-bottom: 10px;
        font-weight: bold;
        padding-bottom: 4px;
        // border-bottom: #fff 2px solid;
        transition: opacity 0.5s ease 0.5s;
        &-line {
          display: flex;
        }
      }

      &-desc {
        font-size: 12px;
        // color: var(--color-neutral-5);
      }

      // overflow: hidden;
      // background: linear-gradient(
      //   to bottom,
      //   rgba(0, 0, 0, 0) 0,
      //   rgba(0, 0, 0, 0.65) 70%
      // );
    }

    /* Center slide text vertically */
    // display: flex;
    // flex-flow: column nowrap;
    // justify-content: center;
    // align-items: center;

    /* Slide content */
    // .description,
    // .title {
    //   display: block;
    //   opacity: 0;
    //   transition: 0.5s ease 0.5s;
    // }
    // &-active {
    //   .description,
    //   .title {
    //     opacity: 1;
    //   }
    //   .title {
    //     margin-bottom: 0.5rem;
    //     font-size: 24px;
    //     color: #000;
    //     transition: opacity 0.5s ease 0.5s;
    //   }
    //   .description {
    //     font-size: 16px;
    //     color: #777;
    //     transition: opacity 0.5s ease 0.75s;
    //   }
    // }
  }

  .sw11iper-thumbs {
    &-wrap {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 6px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0,
        rgb(0 0 0 / 40%) 90%
      );
    }

    &-title {
      font-size: 12px;
      color: #fff;
      font-weight: bold;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      // white-space: nowrap;
      transition: opacity 0.5s ease 0.5s;
    }
  }
</style>
