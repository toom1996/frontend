<template>
  <div class="wrapper">
    兄弟组件B
    {{ res }}
  </div>
</template>

<script setup lang="ts">
import mitter from '@/utils/eventBus'
import { ref } from 'vue'

const res = ref()

mitter.on('msg', (data) => {
  res.value = data
})
</script>

<style scoped>

</style>
