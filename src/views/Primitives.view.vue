<script setup lang="ts">
import { reactive } from 'vue'
import ElText from '@/components/primitives/text/ElText.vue'
import ElButton from '@/components/primitives/Button/ElButton.vue'
import ElToggle from '@/components/primitives/toggles/ElToggle.vue'

const onButtonClicked = async (id: string) => {
  console.log('PrimitivesView: onButtonClicked', id)
}

const onToggleClicked = (id: string) => {
  const stateItem = state.toggles.find((item) => item.id === id);
  if (stateItem) {
    // toggle the value of the ElToggle that was clicked
    stateItem.checked = !stateItem.checked;
  }
  console.log(`You clicked the "${id}" toggle "${stateItem.checked}"`);
}

const state = reactive({
  toggles: [
    {
      id: "toggle-a",
      checked: true,
    },
    {
      id: "toggle-b",
      checked: false,
    },
    {
      id: "toggle-c",
      checked: false,
    },
  ],
})
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

    <ElText tag="h2" addCss="text-gray-500" text="ElToggle examples:"/>
    <div class="p-6 border">
      <ElToggle id="toggle-a" :checked="state.toggles.find((item) => item.id === 'toggle-a').checked" :disabled="false" @clicked="onToggleClicked"/>
      <ElToggle id="toggle-b" :checked="state.toggles.find((item) => item.id === 'toggle-b').checked" :disabled="true" addCss="ml-2" @clicked="onToggleClicked"/>
      <ElToggle id="toggle-c" :checked="state.toggles.find((item) => item.id === 'toggle-c').checked" :disabled="false" addCss="ml-2" @clicked="onToggleClicked"/>
    </div>
  </div>
</template>
