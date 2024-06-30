<script setup>
const props = defineProps(["label","disabled"]);
</script>

<template>
  <li class="nav-item dropdown">
    <a
      :class="{'nav-link':true, 'dropdown-toggle':true, 'disabled':props.disabled}"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ props.label }}
    </a>
    <ul class="dropdown-menu">
      <slot></slot>
    </ul>
  </li>
</template>
