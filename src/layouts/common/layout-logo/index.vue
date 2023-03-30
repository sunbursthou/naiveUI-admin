<template>
  <n-image :src="src" :width="size" :height="size" :preview-disabled="true"></n-image>
</template>
<script setup lang="ts">
interface LogoProps {
  src?: string
  size?: number
}

withDefaults(defineProps<LogoProps>(), {
  size: 28
})
</script>

<style scoped></style>
