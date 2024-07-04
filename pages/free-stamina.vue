<script setup>

const link = "https://youtu.be/g3jCAyPai2Y?si=1f8a-6_i9v-cc7W7&t=66"

await navigateTo(link, {
  external: true,
});

const UserOnClick = async () => {
    await navigateTo(link, {
        external: true,
    });
}
</script>

<template>
  <div class="mt-5 text-center">
    <h1 class="mb-3"><b>ยินดีด้วย!! คุณได้รับอีเธอร์ฟรี!!!</b></h1>
    <p>รีบกดเพื่อรับสิทธิ์เลย!</p>
    <button class="btn btn-secondary" @click="UserOnClick">รับสิทธ์</button>
  </div>
</template>