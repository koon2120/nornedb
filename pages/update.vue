<script setup>
const appConfig = useAppConfig();

useSeoMeta({
  title: `อัพเดท - ${appConfig.website_name}`,
  ogTitle: `อัพเดท - ${appConfig.website_name}`,
  description: appConfig.default_og_description,
  ogDescription: appConfig.default_og_description,
  ogImage: appConfig.default_og_image,
  twitterCard: appConfig.default_og_image,
});
</script>

<template>
  <comingsoon-page/>
</template>
