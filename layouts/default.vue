<template>
  <header class="sarabun-semibold">
    <navbar-ui>
      <template v-slot:title>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/nornedb.appspot.com/o/favicon.png?alt=media"
          width="30"
          class="rounded-pill"
        />
      </template>
      <template v-slot:navbar>
        <navbar-in-ui to="/">หน้าหลัก</navbar-in-ui>
        <dropdown-menu-ui label="ข้อมูลทั่วไป">
          <dropdown-menu-in-ui to="/info/code">รวมโค้ดเกม</dropdown-menu-in-ui>
        </dropdown-menu-ui>
        <dropdown-menu-ui
          label="ข้อมูลภายในเกม"
          disabled="true"
        ></dropdown-menu-ui>
        <navbar-in-ui to="/guide">คู่มือผู้เล่นใหม่</navbar-in-ui>
        <navbar-in-ui to="/news">ข่าวสาร</navbar-in-ui>
        <navbar-in-ui to="/update">อัพเดท</navbar-in-ui>
        <dropdown-menu-ui label="โซนพักผ่อน" disabled="true"></dropdown-menu-ui>
      </template>
    </navbar-ui>
  </header>
  <main class="default-fonts">
    <div class="container mt-3">
      <div class="col-lg mb-3">
        <slot></slot>
      </div>
    </div>
  </main>
  <footer class="sarabun-medium"></footer>
</template>
