<script setup lang="ts">
import {onMounted} from 'vue'
import ItemsView from './views/Items.view.vue'
import LocaleSelector from '@/components/shared/LocaleSelector.component.vue'
import {useLocalization} from '@/localization'
import DebugFormatters from '@/components/shared/DebugFormatters.component.vue'
import PrimitivesView from '@/views/Primitives.view.vue'

// get what we need from useLocalization:
const {t, currentLocale, changeLocale} = useLocalization();

onMounted(() => {
  changeLocale(currentLocale.value);
});
</script>

<template>
  <div class="home m-2 p-2 border-2 border-red-500">
    <LocaleSelector/>
    <h3>{{ t("home.welcome") }} [{{ currentLocale }}]</h3>
    <ItemsView v-if="true"/>
    <DebugFormatters :show="false"/>
    <PrimitivesView v-if="false"/>
  </div>
</template>