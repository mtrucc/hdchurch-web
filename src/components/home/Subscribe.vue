<template>
  <v-container id="subscribe" tag="section">
    <base-card color="rgba(203, 170, 92, 0.51)" class="pa-3">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <base-subheading class="mb-3">
              教堂地址
            </base-subheading>

            <p>北京海淀区彩和坊路9号</p>

            <p>9 Caihefang Rd, Haidian Qu, China</p>
          </v-col>

          <v-col cols="12" md="4">
            <base-subheading>联系方式</base-subheading>

            <v-list class="transparent">
              <v-list-item>
                <v-list-item-avatar color="primary">
                  <v-icon class="elevation-4" dark> mdi-email-outline </v-icon>
                </v-list-item-avatar>

                <v-list-item-title>邮箱</v-list-item-title>

                <v-list-item-subtitle> EMAIL@GMAIL.COM </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar color="primary">
                  <v-icon class="elevation-4" dark> mdi-map-marker </v-icon>
                </v-list-item-avatar>

                <v-list-item-title>公众号</v-list-item-title>

                <v-list-item-subtitle> 微信搜索“海淀堂” </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar color="primary">
                  <v-icon class="elevation-4" dark> mdi-phone </v-icon>
                </v-list-item-avatar>

                <v-list-item-title>电话</v-list-item-title>

                <v-list-item-subtitle> 010-62572391 </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col cols="12" md="4">
            <base-subheading class="mb-3">
              礼拜预约
            </base-subheading>

            <p>占位</p>

            <p>占位</p>
          </v-col>

          <v-col cols="12" md="4">
            <base-subheading class="mb-3">
             扫码奉献
            </base-subheading>

            <p>占位</p>

            <p>占位</p>
          </v-col>
        </v-row>
      </v-container>
    </base-card>
  </v-container>
</template>

<script>
export default {
  name: "HomeSubscribe",
};
</script>
