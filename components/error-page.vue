<script setup>
const props = defineProps(["title"]);
</script>

<template>
    <div class="container text-center default-fonts">
      <img src="https://wcqoupeoqnvolpczgpkx.supabase.co/storage/v1/object/public/WebAssets/images/illustration_sd_erica_000_sad.png" width="300" />
      <div>
        <h1>{{ props.title }}</h1>
      </div>
    </div>
  </template>