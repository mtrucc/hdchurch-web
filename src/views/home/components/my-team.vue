<template>
  <a-card class="general-card" title="快速导航" :body-style="{ padding: '0' }">
    <a-list :bordered="false" size="small">
      <a-list-item
        v-for="team in teamList"
        :key="team.id"
        action-layout="horizontal"
      >
        <a-list-item-meta :title="team.name">
          <template #avatar>
            <a-avatar>
              <img :src="team.avatar" />
            </a-avatar>
          </template>
          <template #description> {{ team.description }} </template>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </a-card>
</template>

<script lang="ts" setup>
  const teamList = [
    {
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
      id: 1,
      name: '主日证道',
      description: 'Sunday Sermon',
    },
    {
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
      id: 2,
      name: '主日献诗',
      description: 'Choral Worship',
    },
    {
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
      id: 3,
      name: '海淀聚会点',
      description: 'Branch of HDChurch',
    },
    {
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
      id: 4,
      name: '联系我们',
      description: 'Contact Us',
    },
  ];
</script>

<style scoped lang="less">
  .general-card {
    height: 310px;
  }
</style>
