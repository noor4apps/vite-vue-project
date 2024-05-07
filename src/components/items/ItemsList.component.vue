<script setup lang="ts">
import type {ItemInterface} from '@/models/items/Item.interface'
import ItemComponent from './children/Item.component.vue'
import Loader from '@/components/shared/Loader.component.vue'

defineProps<{
  items: ItemInterface[]
  loading: boolean
}>()

const emit = defineEmits<{ (e: 'selectItem', id: number): any }>()
const onSelectItem = (id: number) => {
  emit('selectItem', id)
}
</script>

<template>
  <div>
    <h3>Items:</h3>
    <Loader :loading="loading" />
    <ul v-show="!loading">
      <ItemComponent v-for="(item, index) in items" :key="item.id" :model="item" @selectItem="onSelectItem" :isLast="index === items.length - 1"/>
    </ul>
  </div>
</template>
