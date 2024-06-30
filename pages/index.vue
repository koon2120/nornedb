<script setup>
const appConfig = useAppConfig();

useSeoMeta({
  title: `หน้าหลัก - ${appConfig.website_name}`,
  ogTitle: `หน้าหลัก - ${appConfig.website_name}`,
  description: appConfig.default_og_description,
  ogDescription: appConfig.default_og_description,
  ogImage: appConfig.default_og_image,
  twitterCard: appConfig.default_og_image,
});
</script>

<template>
  <h1><strong>สวัสดีทุกท่าน!</strong></h1>
  <p>
    ขอต้อนรับสู่เว็บ NorneDB เว็บไซต์ที่รวบรวมข่าวสารและข้อมูลของเกม Yggdra
    Chronicle <br />เรากำลังพัฒนาเว็บไซต์ให้สมบูรณ์มากขึ้น
    ขอขอบคุณสำหรับการเยื่ยมชมเว็บไซต์
  </p>
</template>
