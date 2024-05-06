<script setup lang="ts">
import ElText from '@/components/primitives/text/ElText.vue'
import ElButton from '@/components/primitives/Button/ElButton.vue'

const onButtonClicked = async (id: string) => {
  console.log('PrimitivesView: onButtonClicked', id)
}
</script>

<template>
  <div class="about">
    <ElText tag="h1" addCss="text-gray-500" text="Primitives"/>
    <ElText tag="h2" addCss="text-gray-500" text="ElText examples:"/>
    <div class="p-6 border">
      <ElText tag="h2" addCss="text-red-500" text="Here ElText will render a <h2> element"/>
      <ElText tag="p" addCss="text-red-700" text="Here ElText will render a <p> element"/>
    </div>

    <ElText tag="h2" addCss="text-gray-500" text="ElButton examples:"/>
    <div class="p-6 border space-x-2">
      <ElButton id="my-button-1" :disabled="false" label="This is a button" @clicked="onButtonClicked"/>
      <ElButton buttonType="danger" id="my-button-2" :disabled="false" label="This is a button danger" @clicked="onButtonClicked"/>
      <ElButton id="my-button-3" :disabled="true" label="This is a disabled button" @clicked="onButtonClicked"/>
    </div>
  </div>
</template>
