<template>
  <span class="ml-2" :style="{ 'font-size': titleFontSize }"> {{ title }}</span>
</template>

<script setup lang="ts">
const titleFontSize = computed(() => `${titleProps.size}px`)
const titleProps = withDefaults(
  defineProps<{
    title?: string
    size?: number | string
  }>(),
  {
    size: 22
  }
)
</script>

<style scoped></style>
