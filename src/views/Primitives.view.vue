<script setup lang="ts">
import ElText from '@/components/primitives/text/ElText.vue'
</script>

<template>
  <div class="about">
    <ElText tag="h1" addCss="text-gray-500" text="Primitives"/>
    <ElText tag="h2" addCss="text-gray-500" text="ElText examples:"/>
    <div class="p-6 border">
      <ElText tag="h2" addCss="text-red-500" text="Here ElText will render a <h2> element"/>
      <ElText tag="p" addCss="text-red-700" text="Here ElText will render a <p> element"/>
    </div>
  </div>
</template>
