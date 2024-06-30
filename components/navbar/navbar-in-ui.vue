<script setup>
const props = defineProps(['to','disabled'])
</script>

<template>
  <li class="nav-item">
    <NuxtLink :class="{'nav-link':true,'disabled':props.disabled}" :to="props.to"><slot></slot></NuxtLink>
  </li>
</template>
