<script setup>
const route = useRoute();
const appConfig = useAppConfig();

const { data: yggdra_character } = await useFetch(
  "/api/v1/character/" + route.params.id
);

if (yggdra_character.value.status == 404) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
}

const characterData = ref(yggdra_character.value.responseData[0]);

useSeoMeta({
  title: `${characterData.value.character_name_th} - ข้อมูลตัวละคร - ${appConfig.website_name}`,
  ogTitle: `${characterData.value.character_name_th} - ข้อมูลตัวละคร - ${appConfig.website_name}`,
  description: appConfig.default_og_description,
  ogDescription: appConfig.default_og_description,
  ogImage: "https://wcqoupeoqnvolpczgpkx.supabase.co/storage/v1/object/public/WebAssets/images/ui-inbox/nornedb_ui_inbox_character.webp",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <dataview-page>
    <div class="mt-5">
      <img
        :src="
          'https://wcqoupeoqnvolpczgpkx.supabase.co/storage/v1/object/public/WebAssets/images/character/' +
          characterData.character_name_eng +
          '.webp'
        "
        style="width: 10rem"
      />
      <h1>{{ characterData.character_name_th }}</h1>
      <p>
        <span>ชื่อญี่ปุ่น : {{ characterData.character_name_jp }}</span><br>
        <span>ชื่ออังกฤษ : {{ characterData.character_name_eng }}</span
        ><br />
        <span>สหพันธ์ : {{ characterData.yggdra_origin.origin_name_th }}</span
        ><br />
        <span>นักพากย์ : <NuxtLink class="link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-light" :to="'/info/seiyuu/'+characterData.yggdra_seiyuu.seiyuu_name_eng">{{ characterData.yggdra_seiyuu.seiyuu_name_th }}</NuxtLink></span
        ><br />
      </p>
    </div>
  </dataview-page>
</template>
