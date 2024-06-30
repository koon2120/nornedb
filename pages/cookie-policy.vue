<script setup>
const appConfig = useAppConfig();

useSeoMeta({
  title: `นโยบายการใช้งานคุกกี้ - ${appConfig.website_name}`,
  ogTitle: `นโยบายการใช้งานคุกกี้ - ${appConfig.website_name}`,
  description: appConfig.default_og_description,
  ogDescription: appConfig.default_og_description,
  ogImage: appConfig.default_og_image,
  twitterCard: 'summary_large_image',
});
</script>

<template>
    <comingsoon-page/>
</template>