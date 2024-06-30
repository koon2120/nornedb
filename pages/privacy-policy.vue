<script setup>
const appConfig = useAppConfig();

useSeoMeta({
  title: `นโยบายความเป็นส่วนตัว - ${appConfig.website_name}`,
  ogTitle: `นโยบายความเป็นส่วนตัว - ${appConfig.website_name}`,
  description: appConfig.default_og_description,
  ogDescription: appConfig.default_og_description,
  ogImage: appConfig.default_og_image,
  twitterCard: 'summary_large_image',
});
</script>

<template>
    <comingsoon-page/>
</template>