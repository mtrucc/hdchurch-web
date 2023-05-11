<template>
  <div class="swiper-container-wrapper">
    <div class="gallery-top">
      <icon-left class="slidePrev-btn" />
      <icon-right class="slideNext-btn" />
      <swiper
        :loop="true"
        :navigation="{
          prevEl: '.slidePrev-btn',
          nextEl: '.slideNext-btn',
        }"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        class="swiper-container"
      >
        <swiper-slide v-for="item in imageList" :key="item">
          <div class="swiper-slide-content">
            <div class="swiper-slide-caption-wrap">
              <div class="swiper-slide-caption">
                <div class="swiper-slide-caption-title-line">
                  <div class="swiper-slide-caption-title"
                    >智驾救援项目于今日进行升级</div
                  >
                </div>
                <div class="swiper-slide-caption-line"></div>
                <div class="swiper-slide-caption-desc">
                  描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                </div>
              </div>
            </div>
            <img class="swiper-slide-img" :src="item" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="gallery-thumbs">
      <swiper
        :direction="'horizontal'"
        :watch-slides-visibility="true"
        :watch-overflow="true"
        :breakpoints="{
          576: {
            direction: 'vertical',
            slidesPerView: 4,
          },
        }"
        :loop="true"
        :space-between="6"
        :slides-per-view="4"
        :free-mode="true"
        :watch-slides-progress="true"
        :modules="modules"
        class="swiper-container"
        @swiper="setThumbsSwiper"
      >
        <swiper-slide v-for="item in imageList" :key="item">
          <div class="swiper-slide-content">
            <div class="swiper-thumbs-wrap">
              <div class="swiper-thumbs-title">智驾救援项目于今日进行升级</div>
            </div>
            <img class="swiper-slide-img" :src="item" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/free-mode';
  import 'swiper/css/navigation';
  import 'swiper/css/thumbs';

  // import required modules
  import { FreeMode, Navigation, Thumbs } from 'swiper';

  const thumbsSwiper: any = ref(null);

  const setThumbsSwiper = (swiper: any) => {
    thumbsSwiper.value = swiper;
  };

  const modules = [Navigation, Thumbs, FreeMode];

  const imageList = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
  ];
</script>

<style scoped lang="less">
  .general-card {
    border-radius: 4px;
    border: none;
    background-color: var(--color-fill-1);
    .arco-list-item {
      // height: 72px;
      // padding-left: 0;
      // padding-bottom: 12px;
      // border-bottom: 1px solid var(--color-neutral-3);
      &:last-child {
        // border-bottom: none;
      }
      .arco-list-item-meta {
        padding: 0;
      }
    }
  }
</style>

<style lang="less">
  .slidePrev-btn {
    position: absolute;
    top: 50%;
    z-index: 100;
    left: 10px;
    font-size: 40px;
    line-height: 0;
    margin: -20px 0;
    color: #fff;
  }
  .slideNext-btn {
    position: absolute;
    top: 50%;
    z-index: 100;
    right: 10px;
    font-size: 40px;
    line-height: 0;
    margin: -20px 0;
    color: #fff;
  }
  .swiper-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;

    border: none;
    border-radius: 4px;

    @media (min-width: 576px) {
      min-height: 320px;
    }
    &-wrapper {
      display: flex;
      flex-flow: column nowrap;
      @media (min-width: 576px) {
        flex-flow: row nowrap;
      }
      height: 100%;
      width: 100%;
    }
  }

  .swiper-button {
    &-next,
    &-prev {
      color: #fff;
    }
  }

  .swiper-slide {
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
        padding: 20px 30px;
        width: 100%;
        display: flex;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0) 0,
          rgb(0 0 0 / 40%) 90%
        );
      }

      &-title {
        font-size: 22px;
        margin-bottom: 10px;
        font-weight: bold;
        padding-bottom: 6px;
        border-bottom: #fff 2px solid;
        &-line {
          display: flex;
        }
      }

      &-desc {
        font-size: 14px;
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

  .gallery-top {
    position: relative;
    width: 100%;
    overflow: hidden;
    @media (min-width: 576px) {
      flex: 1;
      height: 100%;
      margin-right: 6px;
    }
  }

  .gallery-thumbs {
    width: 100%;
    height: 60px;
    padding-top: 6px;
    overflow: hidden;
    flex-shrink: 0;
    @media (min-width: 576px) {
      width: 180px;
      height: 100%;
      padding: 0;
    }
    .swiper-wrapper {
      flex-direction: row;
      @media (min-width: 576px) {
        flex-direction: column;
      }
    }
    .swiper-slide {
      width: 25%;
      flex-flow: row nowrap;
      @media (min-width: 576px) {
        flex-flow: column nowrap;
        width: 100%;
      }
      height: 100%;
      opacity: 0.75;
      cursor: pointer;
    }
    .swiper-slide-thumb-active {
      opacity: 1;
    }
  }
  .swiper-thumbs {
    &-wrap {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 6px;
      width: 100%;
      display: flex;
      justify-content: center;
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
      white-space: nowrap;
    }
  }
</style>
