<script setup>
const appConfig = useAppConfig();

useSeoMeta({
  title: `ข้อมูลนักพากย์ - ${appConfig.website_name}`,
  ogTitle: `ข้อมูลนักพากย์ - ${appConfig.website_name}`,
  description: appConfig.default_og_description,
  ogDescription: appConfig.default_og_description,
  ogImage: "https://wcqoupeoqnvolpczgpkx.supabase.co/storage/v1/object/public/WebAssets/images/ui-inbox/nornedb_ui_inbox_seiyuu.webp",
  twitterCard: "summary_large_image",
});
const { data: yggdra_seiyuu } = await useFetch('/api/v1/seiyuu')

</script>

<template>
  <dataview-page>
    <h1 class="text-center my-4"><strong>ข้อมูลนักพากย์</strong></h1>
    <div class="table-responsive">
      <table class="table table-hover table-sm mb-5 align-middle">
        <thead>
          <tr>
            <th scope="col">ชื่อนักพากย์</th>
            <th scope="col">ให้เสียงพากย์</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="seiyuu_data in yggdra_seiyuu.responseData">
            <td>{{ seiyuu_data.seiyuu_name_th }}</td>
            <td><NuxtLink :to="'/data/character/' + seiyuu_data.yggdra_character[0].character_name_eng" class="link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-light">{{ seiyuu_data.yggdra_character[0].character_name_th }}</NuxtLink></td>
            <td>
              <NuxtLink
                :to="
                  '/info/seiyuu/' + seiyuu_data.seiyuu_name_eng
                "
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
