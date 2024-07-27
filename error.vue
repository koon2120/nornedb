<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <NuxtLayout>
  <div class="text-center default-fonts mt-5">
    <img src="https://wcqoupeoqnvolpczgpkx.supabase.co/storage/v1/object/public/WebAssets/images/illustration_sd_erica_000_sad.png" width="300" />
    <div class="mt-3">
      <h1 v-if="error.statusCode == 404"><b>ไม่พบหน้าที่คุณต้องการ</b></h1>
      <h1 v-else><b>เกิดข้อผิดพลาด {{ error.statusCode }}</b></h1>
      <NuxtLink to="/">กลับหน้าหลัก</NuxtLink>
    </div>
  </div>
</NuxtLayout>
</template>
