<script setup lang="ts">
import {  RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@use './assets/variables' as vars;

html {
  background: vars.$color-black;
  color: vars.$color-white;
  font-family: 'Roboto', sans-serif;
}
</style>
