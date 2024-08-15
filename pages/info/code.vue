<script setup>
const appConfig = useAppConfig();

useSeoMeta({
  title: `รวมโค้ดเกม - ${appConfig.website_name}`,
  ogTitle: `รวมโค้ดเกม - ${appConfig.website_name}`,
  description: appConfig.default_og_description,
  ogDescription: appConfig.default_og_description,
  ogImage: "https://wcqoupeoqnvolpczgpkx.supabase.co/storage/v1/object/public/WebAssets/images/ui-inbox/nornedb_ui_inbox_code.webp",
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

const { data: yggdra_item_code } = await useFetch('/api/v1/code')
const { data: yggdra_item_code_update } = await useFetch('/api/v1/webconfig/yggdra_item_code_update')
</script>

<template>
  <dataview-page>
    <h1 class="text-center my-4"><strong>รวมโค้ดเกม</strong></h1>
    <div class="table-responsive">
      <table class="table table-hover table-sm mb-2 align-middle">
        <caption>อัพเดทล่าสุดเมื่อ{{ `${new Date(yggdra_item_code_update.responseData[0].value).toLocaleDateString('th-TH', {year: 'numeric',month: 'long',day: 'numeric',weekday: 'long',})}` }} <span class="text-warning">*หยุดอัพเดทข้อมูลแล้ว</span></caption>
        <thead>
          <tr>
            <th scope="col">โค้ด</th>
            <th scope="col">ได้รับ</th>
          </tr>
        </thead>
        <tbody class="table-group-divider" v-if="yggdra_item_code_dropdown_options">
          <tr v-for="code in yggdra_item_code.responseData" v-show="code.is_active">
            <td>{{ code.code }} <span v-show="code.is_new" class="badge text-bg-danger">New</span></td>
            <td>{{ code.receive_item }}</td>
          </tr>
        </tbody class="table-group-divider">
        <tbody v-else>
          <tr v-for="code in yggdra_item_code.responseData">
            <td :class="{ 'text-danger': !code.is_active }">{{ code.code }} <span v-show="code.is_new"
                class="badge text-bg-danger">New</span></td>
            <td :class="{ 'text-danger': !code.is_active }">{{ code.receive_item }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <button type="button" class="btn btn-secondary btn-sm mb-3" @click="yggdra_item_code_dropdown_change">
      {{
        yggdra_item_code_dropdown_options
          ? "แสดงโค้ดทั้งหมด"
          : "แสดงโค้ดที่ยังใช้ได้"
      }}
    </button> -->
  </dataview-page>
</template>
