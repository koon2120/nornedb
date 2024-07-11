<script setup>
const appConfig = useAppConfig();

useSeoMeta({
  title: `คลิกเพื่อรับอีเทอร์ฟรี!!! - ${appConfig.website_name}`,
  ogTitle: `คลิกเพื่อรับอีเทอร์ฟรี!!! - ${appConfig.website_name}`,
  description: appConfig.default_og_description,
  ogDescription: appConfig.default_og_description,
  ogImage: appConfig.default_og_image,
  twitterCard: "summary_large_image",
});

const link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

await navigateTo(link, {
  external: true,
});

const UserOnClick = async () => {
    await navigateTo(link, {
        external: true,
    });
}
</script>

<template>
  <div class="mt-5 text-center">
    <h1 class="mb-3"><b>ยินดีด้วย!! คุณได้รับอีเธอร์ฟรี!!!</b></h1>
    <p>รีบกดเพื่อรับสิทธิ์เลย!</p>
    <button class="btn btn-secondary" @click="UserOnClick">รับสิทธ์</button>
  </div>
</template>
