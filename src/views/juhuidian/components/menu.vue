<template>
  <div class="menu-wrap">
    <a-collapse :default-active-key="['1', 2]">
      <a-collapse-item key="1" header="聚会点名称">
        <template #extra>
          <a-button type="outline" size="mini" @click.stop="sayHello">
            在地图中显示
          </a-button>
        </template>
        聚会时间： 电话： 地址：北京市海淀区xxxxxxx 放MarkDown内容
      </a-collapse-item>
      <a-collapse-item key="2" header="聚会点名称">
        <template #extra>
          <a-button type="outline" size="mini" @click.stop="sayHello">
            在地图中显示
          </a-button>
        </template>
        聚会时间： 电话： 地址：北京市海淀区xxxxxxx 放MarkDown内容
      </a-collapse-item>
      <a-collapse-item key="3" header="聚会点名称">
        <template #extra>
          <a-button type="outline" size="mini" @click.stop="sayHello">
            在地图中显示
          </a-button>
        </template>
        聚会时间： 电话： 地址：北京市海淀区xxxxxxx 放MarkDown内容
      </a-collapse-item>
    </a-collapse>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { Message } from '@arco-design/web-vue';

  const sayHello = () => {
    Message.info('hello');
  };

  const onCollapse = (val: any, type: any) => {
    const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
    Message.info({
      content,
      duration: 2000,
    });
  };
</script>

<style scoped lang="less">
  .menu-wrap {
    box-sizing: border-box;
    width: 100%;
    // padding: 20px;
  }
</style>
