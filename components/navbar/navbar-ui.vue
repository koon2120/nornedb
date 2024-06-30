<template>
  <nav class="navbar navbar-expand-lg bg-secondary-subtle">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/"><slot name="title"></slot></NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <slot name="navbar"></slot>
        </ul>
      </div>
    </div>
  </nav>
</template>
