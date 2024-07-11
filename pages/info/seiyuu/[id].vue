<script setup>
const appConfig = useAppConfig();
const route = useRoute();

const { data: yggdra_seiyuu } = await useFetch(
  "/api/v1/seiyuu/" + route.params.id
);

if (yggdra_seiyuu.value.status == 404) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
}

const seiyuuData = ref(yggdra_seiyuu.value.responseData[0]);

useSeoMeta({
  title: `${seiyuuData.value.seiyuu_name_th} - ข้อมูลนักพากย์ - ${appConfig.website_name}`,
  ogTitle: `${seiyuuData.value.seiyuu_name_th} - ข้อมูลนักพากย์ - ${appConfig.website_name}`,
  description: appConfig.default_og_description,
  ogDescription: appConfig.default_og_description,
  ogImage: "https://wcqoupeoqnvolpczgpkx.supabase.co/storage/v1/object/public/WebAssets/images/ui-inbox/nornedb_ui_inbox_seiyuu.webp",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <dataview-page>
    <div class="mt-5">
      <h1>{{ seiyuuData.seiyuu_name_th }}</h1>
      <p>
        <span>ชื่อญี่ปุ่น : {{ seiyuuData.seiyuu_name_jp }}</span> |
        <span>ชื่ออังกฤษ : {{ seiyuuData.seiyuu_name_eng }}</span
        ><br />
        <span>วันเกิด : {{ seiyuuData.dateofbirth }}</span>
        <br />
        <span>พากย์ตัวละคร : <NuxtLink class="link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-light" :to="'/data/character/'+seiyuuData.yggdra_character[0].character_name_eng">{{ seiyuuData.yggdra_character[0].character_name_th }}</NuxtLink></span>
      </p>
      <NuxtLink class="btn btn-light btn-sm me-1" target="_blank" :to="seiyuuData.seiyuu_info_wikipedia">ข้อมูลจาก Wikipedia</NuxtLink>
      <NuxtLink class="btn btn-light btn-sm me-1" target="_blank" v-show="seiyuuData.seiyuu_info_myanimelist" :to="seiyuuData.seiyuu_info_myanimelist">ข้อมูลจาก MyAnimeList</NuxtLink>
    </div>
  </dataview-page>
</template>
