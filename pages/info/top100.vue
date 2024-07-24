<script setup>
const appConfig = useAppConfig();
const route = useRoute();

const { data, status, error, refresh, clear } = await useAsyncData('yggdra_top100', () => $fetch('/api/v1/top100/' + route.query.ss))

async function OnPageChange() {
  if (route.query.ss == undefined) {
    await navigateTo({ path: "/info/top100", query: { ss: 4 } })
  }
}

OnPageChange()
watch(() => route.query, (query) => {
  OnPageChange()
  refresh()
})

useSeoMeta({
  title: `TOP 100 สงครามชมรม - ${appConfig.website_name}`,
  ogTitle: `TOP 100 สงครามชมรม - ${appConfig.website_name}`,
  description: appConfig.default_og_description,
  ogDescription: appConfig.default_og_description,
  ogImage: appConfig.default_og_image,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <dataview-page>
    <div v-if="data.status != 404" class="table-responsive">
      <h1 class="text-center my-4"><strong>TOP 100 สงครามชมรมซีซั่น {{ route.query.ss }}</strong></h1>
      <table class="table table-hover table-sm mb-5 align-middle">
        <thead>
          <tr>
            <th scope="col">อันดับ</th>
            <th scope="col">ชื่อชมรม</th>
            <th scope="col">คะแนนรวม</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="top100 in data.responseData">
            <td>{{ top100.no }}</td>
            <td>{{ top100.guild_name }}</td>
            <td v-if="top100.point != null">{{ top100.point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</td>
            <td v-else class="text-secondary">ไม่มีข้อมูล</td>
          </tr>
        </tbody>
      </table>
      <nav>
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <NuxtLink :class="{ 'page-link': true, 'disabled': route.query.ss <= 1 }"
              :to="{ path: '/info/top100', query: { ss: new Number(route.query.ss) - 1 } }"><b>ก่อนหน้านี้</b></NuxtLink>
          </li>
          <li class="page-item">
            <NuxtLink :class="{ 'page-link': true, 'disabled': route.query.ss >= 4 }"
              :to="{ path: '/info/top100', query: { ss: new Number(route.query.ss) + 1 } }"><b>หลังจากนี้</b></NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div v-else>
      <ErrorPage title="ยังไม่มีข้อมูล" />
    </div>
  </dataview-page>
</template>