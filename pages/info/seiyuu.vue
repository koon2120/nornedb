<script setup>
const appConfig = useAppConfig();
const supabase = useSupabaseClient();

useSeoMeta({
  title: `ข้อมูลนักพากย์ - ${appConfig.website_name}`,
  ogTitle: `ข้อมูลนักพากย์ - ${appConfig.website_name}`,
  description: appConfig.default_og_description,
  ogDescription: appConfig.default_og_description,
  ogImage: appConfig.default_og_image,
  twitterCard: "summary_large_image",
});

const { data: yggdra_seiyuu } = await useAsyncData(
  "yggdra_seiyuu",
  async () => {
    const { data } = await supabase.from("yggdra_character")
    .select('character_id,character_name_th,yggdra_seiyuu(seiyuu_name_th,dateofbirth,seiyuu_info_wikipedia,seiyuu_info_myanimelist)'
    ).order("character_id", { ascending: true }
    );
    return data;
  }
);
</script>

<template>
  <h1 class="text-center my-4"><strong>ข้อมูลนักพากย์</strong></h1>
  <div class="table-responsive">
    <table class="table table-sm mb-5">
      <thead>
        <tr>
          <th scope="col">ชื่อนักพากย์</th>
          <th scope="col">ให้เสียงพากย์</th>
          <th scope="col">วันเกิด</th>
          <th scope="col">ข้อมูลเพิ่มเติม</th>
          <th scope="col">ข้อมูลจาก MAL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="seiyuu_data in yggdra_seiyuu">
          <td>{{ seiyuu_data.yggdra_seiyuu.seiyuu_name_th }}</td>
          <td>{{ seiyuu_data.character_name_th }}</td>
          <td>{{ seiyuu_data.yggdra_seiyuu.dateofbirth }}</td>
          <td>
            <NuxtLink
              :to="seiyuu_data.yggdra_seiyuu.seiyuu_info_wikipedia"
              target="_blank"
              type="button"
              class="link-primary"
              >คลิกที่นี่</NuxtLink
            >
          </td>
          <td>
            <NuxtLink
              :to="seiyuu_data.yggdra_seiyuu.seiyuu_info_myanimelist"
              target="_blank"
              type="button"
              class="link-primary"
              v-if="seiyuu_data.yggdra_seiyuu.seiyuu_info_myanimelist !== null"
              >คลิกที่นี่</NuxtLink
            >
            <span v-else class="text-secondary">ไม่มีข้อมูล</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
