<script setup lang="ts">
import {onMounted} from 'vue'
import ItemsView from './views/Items.view.vue'
import LocaleSelector from '@/components/shared/LocaleSelector.component.vue'
import {useLocalization} from '@/localization'
// get what we need from useLocalization:
const {t, currentLocale, changeLocale} = useLocalization();

onMounted(() => {
  changeLocale(currentLocale.value);
});
</script>

<template>
  <div class="home">
    <LocaleSelector/>
    <h3>{{ t("home.welcome") }} [{{ currentLocale }}]</h3>
    <ItemsView v-if="false"/>
  </div>
</template>

<style>
.home {
  padding: 20px;
}
</style>