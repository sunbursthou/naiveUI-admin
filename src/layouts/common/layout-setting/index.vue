<template>
  <div>
    <div class="fixed top-360px right-0px">
      <n-button type="primary" @click="showDrawer(true)">
        <n-icon size="18">
          <SettingOutlined />
        </n-icon>
      </n-button>
    </div>

    <n-drawer v-model:show="show" :default-width="settingDrawerWidth" placement="right">
      <n-drawer-content title="布局与主题配置">
        《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
      </n-drawer-content>
      <div class="fixed top-360px right-280px">
        <n-button type="primary" @click="showDrawer(false)">
          <n-icon size="18">
            <CloseOutlined />
          </n-icon>
        </n-button>
      </div>
    </n-drawer>
  </div>
</template>

<script setup lang="ts">
import { CloseOutlined, SettingOutlined } from '@vicons/antd'
withDefaults(
  defineProps<{
    settingDrawerWidth?: number
  }>(),
  {
    settingDrawerWidth: 280
  }
)
const show = ref(false)
const showDrawer = (val: boolean) => {
  show.value = val
}
</script>

<style scoped></style>
