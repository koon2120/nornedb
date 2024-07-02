<script setup>
const appConfig = useAppConfig();
const { $supabase } = useNuxtApp();

useSeoMeta({
  title: `รวมโค้ดเกม - ${appConfig.website_name}`,
  ogTitle: `รวมโค้ดเกม - ${appConfig.website_name}`,
  description: appConfig.default_og_description,
  ogDescription: appConfig.default_og_description,
  ogImage: appConfig.default_og_image,
  twitterCard: "summary_large_image",
});

const yggdra_item_code = useState("yggdra_item_code", () => []);
const yggdra_item_code_update = useState("yggdra_item_code_update", () => '');
const yggdra_item_code_dropdown_options = useState(
  "yggdra_item_code_dropdown_options",
  () => true
);

function yggdra_item_code_dropdown_change() {
  yggdra_item_code_dropdown_options.value = !yggdra_item_code_dropdown_options.value
}

async function getYggdraItemCode() {
  yggdra_item_code.value = [{ code: "กำลังโหลด...", receive: "กำลังโหลด...", active: true }];
  if (yggdra_item_code_dropdown_options.value == "แสดงโค้ดทั้งหมด") {
    const get_yggdra_item_code = await $supabase
      .from("yggdra_item_code")
      .select()
      .eq("active", true);
    yggdra_item_code.value = get_yggdra_item_code.data;
  } else {
    const get_yggdra_item_code = await $supabase
      .from("yggdra_item_code")
      .select();
    yggdra_item_code.value = get_yggdra_item_code.data;
  }
}

async function getYggdraItemCodeUpdate() {
  yggdra_item_code_update.value = "กำลังโหลด..."
  const get_yggdra_item_code_update = await $supabase
    .from("nornedb_webconfig")
    .select("value")
    .eq("key", "yggdra_item_code_update");
  yggdra_item_code_update.value = get_yggdra_item_code_update.data[0].value;
}

onMounted(() => {
  if (yggdra_item_code.value == false || yggdra_item_code_update.value == false) {
    getYggdraItemCode()
    getYggdraItemCodeUpdate()
  }
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
    <tbody v-if="yggdra_item_code_dropdown_options">
      <tr v-for="code in yggdra_item_code" v-show="code.active">
        <td>{{ code.code }}</td>
        <td>{{ code.receive }}</td>
      </tr>
    </tbody>
    <tbody v-else>
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
    {{ yggdra_item_code_dropdown_options ? "แสดงโค้ดทั้งหมด" : "แสดงโค้ดที่ยังใช้ได้" }}
  </button>
  <p>อัพเดทล่าสุดเมื่อวันที่ : {{ yggdra_item_code_update }}</p>
</template>
