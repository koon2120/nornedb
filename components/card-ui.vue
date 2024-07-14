<script setup>
const props = defineProps(["to", "image"]);
</script>

<template>
  <div class="col-sm">
    <div class="card mb-3" style="width: 18rem">
      <img :src="props.image" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">
          <strong><slot name="title"></slot></strong>
        </h5>
        <p class="card-text"><slot name="description"></slot></p>
        <NuxtLink :to="props.to" class="btn btn-secondary"
          ><slot name="button"></slot
        ></NuxtLink>
      </div>
    </div>
  </div>
</template>
