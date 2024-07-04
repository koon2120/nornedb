<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div class="container text-center default-fonts mt-5">
    <img src="https://wcqoupeoqnvolpczgpkx.supabase.co/storage/v1/object/public/WebAssets/images/illustration_sd_erica_000_sad.png" width="300" />
    <div class="mt-3">
      <h1 v-if="error.statusCode == 404">ไม่พบหน้าที่คุณต้องการ</h1>
      <h1 v-else>เกิดข้อผิดพลาด {{ error.statusCode }}</h1>
      <NuxtLink to="/">กลับหน้าหลัก</NuxtLink>
    </div>
  </div>
</template>
