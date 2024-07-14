<template>
    <div class="row justify-content-center">
      <div class="col-xl-9 mb-5">
          <slot/>
      </div>
      <div class="col-xl-3">
        <div class="row mt-5">
          <card-ui to="/info/code" image="https://wcqoupeoqnvolpczgpkx.supabase.co/storage/v1/object/public/WebAssets/images/ui-inbox/nornedb_ui_inbox_code.webp">
            <template #title>รวมโค้ดเกม</template>
            <template #description>รวมโค้ดเกมสำหรับนำไปกรอกรับไอเทมในเกมพร้อมอัพเดทล่าสุด</template>
            <template #button>ไปหน้านี้</template>
          </card-ui>
          <card-ui to="/info/seiyuu" image="https://wcqoupeoqnvolpczgpkx.supabase.co/storage/v1/object/public/WebAssets/images/ui-inbox/nornedb_ui_inbox_seiyuu.webp">
            <template #title>ข้อมูลนักพากย์</template>
            <template #description>รวมข้อมูลนักพากย์ของเกม ทั้งเก่าและใหม่</template>
            <template #button>ไปหน้านี้</template>
          </card-ui>
          <card-ui to="/data/character" image="https://wcqoupeoqnvolpczgpkx.supabase.co/storage/v1/object/public/WebAssets/images/ui-inbox/nornedb_ui_inbox_character.webp">
            <template #title>ข้อมูลตัวละคร</template>
            <template #description>ข้อมูลต่างๆ ของตัวละครในเกม Yggdra Chronicle</template>
            <template #button>ไปหน้านี้</template>
          </card-ui>
        </div>
      </div>
    </div>
  </template>
  