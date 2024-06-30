<script setup>
const appConfig = useAppConfig();

useSeoMeta({
  title: `รวมโค้ดเกม - ${appConfig.website_name}`,
  ogTitle: `รวมโค้ดเกม - ${appConfig.website_name}`,
  description: appConfig.default_og_description,
  ogDescription: appConfig.default_og_description,
  ogImage: appConfig.default_og_image,
  twitterCard: appConfig.default_og_image,
});

const codelist = [
  {"code":"HBDERICA","receive":"20 ชิ้นส่วนเอริกะ, 2 คุกกี้โฮมเมดสำหรับเป็นของขวัญ, 2 เค้กคุณภาพดี, 2 ข้าวกล่องทำเอง"},
  {"code":"99PARTY","receive":"150,000 เอเรส"},
  {"code":"PRAMOTE99","receive":"5 ตั๋วอัญเชิญวัลคีรี"},
  {"code":"CELEB99","receive":"200 สตามิน่า"},
  {"code":"DAY99GIFT","receive":"150,000 EXP"},
  {"code":"NINETY9","receive":"150,000 เอเรส"},
]

const last_update = "30/6/2567"
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
      <tr v-for="code in codelist">
        <td>{{ code.code }}</td>
        <td>{{ code.receive }}</td>
      </tr>
    </tbody>
  </table>
  <p>อัพเดทล่าสุดเมื่อวันที่ : {{ last_update }}</p>
</template>
