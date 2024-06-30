<template>
  <header class="sarabun-semibold">
    <navbar-ui>
      <template v-slot:title>
        <img src="https://firebasestorage.googleapis.com/v0/b/nornedb.appspot.com/o/favicon.png?alt=media" width="30" class="rounded-pill" />
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
        <navbar-in-ui to="/guide" 
          >คู่มือผู้เล่นใหม่</navbar-in-ui
        >
        <navbar-in-ui to="/news" >ข่าวสาร</navbar-in-ui>
        <navbar-in-ui to="/update" >อัพเดท</navbar-in-ui>
        <dropdown-menu-ui label="โซนพักผ่อน" disabled="true"></dropdown-menu-ui>
      </template>
    </navbar-ui>
  </header>
  <main class="default-fonts">
    <div class="container mt-3">
      <div class="row">
        <div class="col-lg mb-3">
          <slot></slot>
        </div>
        <div class="col-lg-3">
          <div class="row">
            <div class="col">
              <card-ui
                to="https://www.facebook.com/yggdrafamily"
                label="Yggdra Family"
              >
                เพจสำหรับชาว Yggdra Chronicle!!
              </card-ui>
            </div>
            <div class="col">
              <card-ui
                to="https://www.facebook.com/YggdraChronicle"
                label="Yggdra Chronicle Official Facebook Page"
              >
                ช่องทางติดตามข่าวสารของเกม
              </card-ui>
            </div>
            <div class="col">
              <card-ui
                to="https://games.bfg.in.th/discord"
                label="Yggdra Chronicle Official Discord"
              >
                พูดคุยกับชาวอิกดราได้ที่นี่
              </card-ui>
            </div>
            <div class="col">
              <card-ui
                to="https://games.bfg.in.th/yggdra_official"
                label="Yggdra Chronicle Official Website"
              >
                เว็บไซต์ของตัวเกม
              </card-ui>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer class="sarabun-medium"></footer>
</template>
