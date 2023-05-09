<template>
  <a-card
    class="general-card"
    title="牧师证道专栏"
    :body-style="{ padding: '0 16px 16px' }"
  >
    <a-grid :cols="24" :col-gap="16" :row-gap="16">
      <a-grid-item
        v-for="(item, index) in 8"
        :key="index"
        :span="{ xs: 12, sm: 8, md: 8, lg: 6, xl: 6, xxl: 6 }"
      >
        <a-card :title="'牧师' + (index + 1)" hoverable>
          <template #extra>
            <a-link>更多</a-link>
          </template>
          <div class="neirong">
            <div class="touxiang">
              <a-avatar shape="square">
                <img
                  alt="avatar"
                  src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                />
              </a-avatar>
            </div>
            <div class="liebiao">
              内容一的标题<br />
              内容二的标题<br />
              内容三的标题<br />
            </div>
          </div>
        </a-card>
      </a-grid-item>
    </a-grid>
  </a-card>
</template>

<script lang="ts" setup></script>

<style scoped lang="less">
  .general-card {
    .arco-list-item {
      // height: 72px;
      // padding-left: 0;
      // padding-bottom: 12px;
      // border-bottom: 1px solid var(--color-neutral-3);
      &:last-child {
        border-bottom: none;
      }
      .arco-list-item-meta {
        padding: 0;
      }
    }
  }

  .neirong {
    display: flex;
  }
  .liebiao {
    margin-left: 10px;
  }
</style>
