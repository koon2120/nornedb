<script setup>
const props = defineProps(["to","disabled"])
</script>

<template>
    <li><NuxtLink :class="{'dropdown-item':true,'disabled':props.disabled}" :to="props.to"><slot></slot></NuxtLink></li>
</template>