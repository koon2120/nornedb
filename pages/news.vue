<script setup>
const appConfig = useAppConfig();

useSeoMeta({
  title: `ข่าวสาร - ${appConfig.website_name}`,
  ogTitle: `ข่าวสาร - ${appConfig.website_name}`,
  description: appConfig.default_og_description,
  ogDescription: appConfig.default_og_description,
  ogImage: appConfig.default_og_image,
  twitterCard: 'summary_large_image',
});
</script>

<template>
    <comingsoon-page/>
</template>