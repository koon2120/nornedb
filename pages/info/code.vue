<script setup>
const appConfig = useAppConfig();
const supabase = useSupabaseClient();

useSeoMeta({
  title: `รวมโค้ดเกม - ${appConfig.website_name}`,
  ogTitle: `รวมโค้ดเกม - ${appConfig.website_name}`,
  description: appConfig.default_og_description,
  ogDescription: appConfig.default_og_description,
  ogImage: appConfig.default_og_image,
  twitterCard: "summary_large_image",
});

const yggdra_item_code_dropdown_options = useState(
  "yggdra_item_code_dropdown_options",
  () => true
);

function yggdra_item_code_dropdown_change() {
  yggdra_item_code_dropdown_options.value =
    !yggdra_item_code_dropdown_options.value;
}

const { data : yggdra_item_code} = await useAsyncData("yggdra_item_code", async () => {
  const { data } = await supabase
    .from("yggdra_item_code")
    .select()
    .order("id",{ascending:true})
  return data
});

const { data : yggdra_item_code_update } = await useAsyncData("yggdra_item_code_update", async () => {
  const { data } = await supabase
    .from("nornedb_webconfig")
    .select("value")
    .eq("key", "yggdra_item_code_update")
    return data
})
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
        <td>{{ code.code }} <span v-show="code.is_new" class="badge text-bg-danger">New</span></td>
        <td>{{ code.receive }}</td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr v-for="code in yggdra_item_code">
        <td :class="{'text-danger':!code.active}">{{ code.code }} <span v-show="code.is_new" class="badge text-bg-danger">New</span></td>
        <td :class="{'text-danger':!code.active}">{{ code.receive }}</td>
      </tr>
    </tbody>
  </table>
  <button
    type="button"
    class="btn btn-secondary btn-sm mb-3"
    @click="yggdra_item_code_dropdown_change"
  >
    {{
      yggdra_item_code_dropdown_options
        ? "แสดงโค้ดทั้งหมด"
        : "แสดงโค้ดที่ยังใช้ได้"
    }}
  </button>
  <p>อัพเดทล่าสุดเมื่อวันที่ : {{ yggdra_item_code_update[0].value }}</p>
</template>
