<script setup>
import { createClient } from "@supabase/supabase-js";

const appConfig = useAppConfig();
const supabase = createClient(appConfig.supabaseUrl, appConfig.supabaseKey);

const yggdra_item_code = ref([]);
const yggdra_item_code_update = ref("กำลังโหลด...");
const yggdra_item_code_dropdown_options = ref("แสดงโค้ดทั้งหมด");

function yggdra_item_code_dropdown_change() {
  if (yggdra_item_code_dropdown_options.value == "แสดงโค้ดที่ยังใช้ได้") {
    yggdra_item_code_dropdown_options.value = "แสดงโค้ดทั้งหมด";
  } else {
    yggdra_item_code_dropdown_options.value = "แสดงโค้ดที่ยังใช้ได้";
  }
  getData();
}

async function getData() {
  yggdra_item_code.value = [{ code: "กำลังโหลด...", receive: "กำลังโหลด..." }];
  if (yggdra_item_code_dropdown_options.value == "แสดงโค้ดทั้งหมด") {
    const get_yggdra_item_code = await supabase
      .from("yggdra_item_code")
      .select()
      .eq("active", true);
    yggdra_item_code.value = get_yggdra_item_code.data;
  } else {
    const get_yggdra_item_code = await supabase
      .from("yggdra_item_code")
      .select();
    yggdra_item_code.value = get_yggdra_item_code.data;
  }
  const get_yggdra_item_code_update = await supabase
    .from("nornedb_webconfig")
    .select("value")
    .eq("key", "yggdra_item_code_update");
  yggdra_item_code_update.value = get_yggdra_item_code_update.data[0].value;
}

onMounted(() => {
  getData();
});

useSeoMeta({
  title: `รวมโค้ดเกม - ${appConfig.website_name}`,
  ogTitle: `รวมโค้ดเกม - ${appConfig.website_name}`,
  description: appConfig.default_og_description,
  ogDescription: appConfig.default_og_description,
  ogImage: appConfig.default_og_image,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <h1 class="text-center"><strong>รวมโค้ดเกม</strong></h1>
  <table class="table table-sm">
    <thead>
      <tr>
        <th scope="col">โค้ด</th>
        <th scope="col">ได้รับ</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="code in yggdra_item_code">
        <td>{{ code.code }}</td>
        <td>{{ code.receive }}</td>
      </tr>
    </tbody>
  </table>
  <button
    type="button"
    class="btn btn-secondary btn-sm mb-3"
    @click="yggdra_item_code_dropdown_change"
  >
    {{ yggdra_item_code_dropdown_options }}
  </button>
  <p>อัพเดทล่าสุดเมื่อวันที่ : {{ yggdra_item_code_update }}</p>
</template>
