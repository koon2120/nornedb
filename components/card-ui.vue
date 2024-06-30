<script setup>
const props = defineProps(["label", "to"]);
</script>

<template>
  <div class="card mb-3 bg-secondary-subtle" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">
        <strong>{{ props.label }}</strong>
      </h5>
      <p class="card-text"><slot></slot></p>
      <NuxtLink :to="props.to" class="btn btn-secondary" target="_blank"
        >คลิกที่นี่
      </NuxtLink>
    </div>
  </div>
</template>
