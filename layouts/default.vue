<script setup>
const appconfig = useAppConfig();

const { progress } = useLoadingIndicator();
</script>

<template>
  <header class="sarabun-semibold">
    <div class="progress" role="progressbar" aria-label="Example 1px high" :aria-valuenow="progress" aria-valuemin="0"
      aria-valuemax="100" style="height: 1px">
      <div class="progress-bar bg-secondary" :style="{ width: progress + '%' }"></div>
    </div>
    <navbar-ui>
      <template v-slot:title>
        <img :src="appconfig.nornedb_logo" width="30" class="rounded-pill" />
      </template>
      <template v-slot:navbar>
        <navbar-in-ui to="/">หน้าหลัก</navbar-in-ui>
        <dropdown-menu-ui label="ข้อมูลทั่วไป">
          <dropdown-menu-in-ui to="/info/code">รวมโค้ดเกม</dropdown-menu-in-ui>
          <dropdown-menu-in-ui to="/info/seiyuu">ข้อมูลนักพากย์</dropdown-menu-in-ui>
          <dropdown-menu-in-ui to="/info/top100">TOP 100 สงครามชมรม</dropdown-menu-in-ui>
        </dropdown-menu-ui>
        <dropdown-menu-ui label="ข้อมูลภายในเกม">
          <dropdown-menu-in-ui to="/data/character">ข้อมูลตัวละคร</dropdown-menu-in-ui>
        </dropdown-menu-ui>
        <dropdown-menu-ui label="โซนพักผ่อน" disabled="true"></dropdown-menu-ui>
      </template>
    </navbar-ui>
  </header>
  <main class="default-fonts">
    <div class="container mt-3 mb-3">
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>ประกาศ!</strong> หยุดการอัพเดทข้อมูลตั้งแต่วันที่ 31 กรกฎาคม 2567 เป็นต้นไป ขอบคุณที่สนับสนุนเรามาโดยตลอด
      </div>
      <slot></slot>
    </div>
  </main>
  <footer class="sarabun-medium"></footer>
</template>
