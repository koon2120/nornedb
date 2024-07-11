<script setup>
const appConfig = useAppConfig();

useSeoMeta({
  title: `ข้อมูลตัวละคร - ${appConfig.website_name}`,
  ogTitle: `ข้อมูลตัวละคร - ${appConfig.website_name}`,
  description: appConfig.default_og_description,
  ogDescription: appConfig.default_og_description,
  ogImage: "https://wcqoupeoqnvolpczgpkx.supabase.co/storage/v1/object/public/WebAssets/images/ui-inbox/nornedb_ui_inbox_character.webp",
  twitterCard: "summary_large_image",
});

const { data: yggdra_character } = await useFetch('/api/v1/character')
</script>

<template>
  <dataview-page>
    <h1 class="text-center my-4"><strong>ข้อมูลตัวละคร</strong></h1>
    <div class="table-responsive">
      <table class="table table-hover table-sm mb-5 align-middle">
        <thead>
          <tr>
            <th scope="col">รูป</th>
            <th scope="col">ชื่อตัวละคร</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="character_data in yggdra_character.responseData">
            <td><img :src="'https://wcqoupeoqnvolpczgpkx.supabase.co/storage/v1/object/public/WebAssets/images/character/'+ character_data.character_name_eng +'.webp'" style="width: 3rem"></td>
            <td>{{ character_data.character_name_th }}</td>
            <td>
              <NuxtLink
                :to="'/data/character/' + character_data.character_name_eng"
                type="button"
                class="btn btn-sm btn-primary"
                >รายละเอียด</NuxtLink
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </dataview-page>
</template>