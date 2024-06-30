<script setup>
const appConfig = useAppConfig();

useSeoMeta({
  title: `หน้าหลัก - ${appConfig.website_name}`,
  ogTitle: `หน้าหลัก - ${appConfig.website_name}`,
  description: appConfig.default_og_description,
  ogDescription: appConfig.default_og_description,
  ogImage: appConfig.default_og_image,
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div class="text-center my-5">
    <h1 class="display-1 fw-bold">สวัสดีทุกท่าน!</h1>
    <p class="lead">
      ขอต้อนรับสู่เว็บ NorneDB เว็บไซต์ที่รวบรวมข่าวสารและข้อมูลของเกม Yggdra
      Chronicle
    </p>
  </div>
  <div class="row justify-content-center text-center my-5">
    <div class="col-md-5 my-2">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title fw-bold">รวมโค้ดเกม</h5>
          <p class="card-text text-body-secondary">
            รวมโค้ดเกมสำหรับนำไปกรอกรับไอเทมในเกม<br />พร้อมอัพเดทล่าสุด
          </p>
          <NuxtLink to="/info/code" class="btn btn-secondary"
            >คลิกที่นี่</NuxtLink
          >
        </div>
      </div>
    </div>
    <div class="col-md-5 my-2">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title fw-bold">ข้อมูลนักพากย์</h5>
          <p class="card-text text-body-secondary">
            รวมข้อมูลนักพากย์ของเกม<br />ทั้งเก่าและใหม่
          </p>
          <NuxtLink class="btn btn-body-secondary disabled">ยังไม่พร้อม</NuxtLink>
        </div>
      </div>
    </div>
    <div class="col-md-5 my-2">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title fw-bold">คู่มือผู้เล่นใหม่</h5>
          <p class="card-text text-body-secondary">
            ไกด์คร่าวๆ เกี่ยวกับการเล่นเกม<br />Yggdra Chronicle
          </p>
          <NuxtLink class="btn btn-body-secondary disabled">ยังไม่พร้อม</NuxtLink>
        </div>
      </div>
    </div>
    <div class="col-md-5 my-2">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title fw-bold">ข้อมูลตัวละคร</h5>
          <p class="card-text text-body-secondary">
            ข้อมูลต่างๆ ของตัวละครในเกม<br />Yggdra Chronicle
          </p>
          <NuxtLink class="btn btn-body-secondary disabled">ยังไม่พร้อม</NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <div class="row text-center justify-content-center">
    <div class="col-md-8 my-4">
      <div class="card">
        <div class="card-body p-5">
          <h1 class="card-title mb-4 fw-bold">เกี่ยวกับ NorneDB</h1>
          <div class="card-text">
            <p>
              <strong>NorneDB</strong> เป็นเว็บไซต์สำหรับเก็บรวบรวมข้อมูลของตัวเกม <strong>Yggdra
              Chronicle</strong> โดยข้อมูลในเว็บนี้ได้มาจากการเก็บข้อมูลในเกมโดยตรง
              และอาจมีข้อมูลจากแหล่งข้อมูลช่องทางต่างๆ ด้วย
              เว็บไซต์นี้จะมีการอัพเดทเรื่อยๆ เมื่อหากมี Content ใหม่ๆ เข้ามา
              และทุกท่านสามารถเข้ามาร่วมแบ่งบันข้อมูลได้ในเร็วๆ นี้
            </p>
            <p>
              ส่วนทำไมเว็บต้องชื่อว่า <strong>NorneDB..?</strong><br>
              ก็เพราะว่า <strong>Norne</strong> ก็คือตัวละครที่จะอยู่กับผู้เล่นตลอดเวลา <span class="text-dark-emphasis">(คล้ายๆ Arona ของ Blue Archive)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-8 my-4">
      <div class="card">
        <div class="card-body p-5">
          <h1 class="card-title mb-4 fw-bold">เกี่ยวกับเกม Yggdra Chronicle</h1>
          <div class="card-text">
            <p>
              เกม <strong>Yggdra Chronicle</strong> เป็นเกมแนว RPG Turn based
              โดยผู้เล่นจะต้องใช้การ์ดเพื่อต่อสู้ หรือใช้สกิลใส่ศัตรู
              และฟื้นฟูตัวละครพันธมิตร สามารถพัฒนาตัวละครได้โดยการเพิ่มเลเวล,
              EXP, ดาวและเลเวลสกิล แต่ละตัวละครจะมีสกิลที่แตกต่างกัน
              ตัวเกมมีระบบอัตลักษณ์ ทำให้ตัวละครและศัตรูจะมีจุดแข็ง
              และจุดอ่อนที่ต่างกัน
            </p>
            <p>
              ปัจจุบันตัวเกมสามารถเล่นได้ฟรี โดยสามารถดาวน์โหลดได้ผ่าน Google
              Play Store และ App Store
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row justify-content-center my-3">
    <div class="col-md-4 my-2"><img class="img-fluid rounded" src="https://yggdra.bfg.in.th/assets/wallpaper-3.1fe012d9.jpg" width="500px"></div>
    <div class="col-md-4 my-2"><img class="img-fluid rounded" src="https://yggdra.bfg.in.th/assets/wallpaper-2.a0d6bb06.jpg" width="500px"></div>
    <div class="col-md-4 my-2"><img class="img-fluid rounded" src="https://yggdra.bfg.in.th/assets/wallpaper-1.879cd90c.jpg" width="500px"></div>
  </div>
  <div class="row row-cols-auto justify-content-center mt-5">
    <div class="col"><NuxtLink to="/privacy-policy" class="fw-normal h6">นโยบายความเป็นส่วนตัว</NuxtLink></div>
    <div class="col"><NuxtLink to="/cookie-policy" class="fw-normal h6">นโยบายการใช้งานคุกกี้</NuxtLink></div>
    <div class="col"><NuxtLink to="https://yggdra.bfg.in.th/" target="_blank" class="fw-normal h6">เว็บไซต์อย่างเป็นทางการของเกม</NuxtLink></div> 
  </div>
</template>
