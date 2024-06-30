<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div class="container text-center default-fonts mt-5">
    <img src="https://firebasestorage.googleapis.com/v0/b/nornedb.appspot.com/o/images%2Fillustration_sd_erica_000_sad.png?alt=media" width="300" />
    <div class="mt-3">
      <h1 v-if="error.statusCode == 404">ไม่พบหน้าที่คุณต้องการ</h1>
      <h1 v-else>เกิดข้อผิดพลาด {{ error.statusCode }}</h1>
      <NuxtLink to="/">กลับหน้าหลัก</NuxtLink>
    </div>
  </div>
</template>
