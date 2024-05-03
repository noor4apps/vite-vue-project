<script setup lang="ts">
import ItemsView from './views/Items.view.vue'
// store a reference to import meta env into a var
const metaEnv = import.meta.env
</script>

<template>
  <div class="home">
    [{{ metaEnv }}]
    <ItemsView />
  </div>
</template>

<style>
.home {
  padding: 20px;
}
</style>