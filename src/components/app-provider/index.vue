<template>
  <n-message-provider>
    <n-dialog-provider>
      <n-notification-provider>
        <n-loading-bar-provider>
          <slot></slot>
        </n-loading-bar-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-message-provider>
</template>

<script setup lang="ts"></script>

<style scoped></style>
