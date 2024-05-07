<template>
  <li :data-testid="testid" :class="cssClass" @click="handleClick">
    <ElText :testid="`${testid}-text`" tag="div" :text="model.name"/>
    <ElToggle :testid="`${testid}-toggle`" :checked="model.selected"/>
  </li>
</template>

<script lang="ts">
import {defineComponent, computed, PropType} from 'vue'
import {ElText, ElToggle} from '@/components/primitives'
import type {ItemInterface} from '@/models/items/Item.interface'

export default defineComponent({
  name: 'ItemComponent',
  emits: ['selectItem'],
  components:{
    ElText,
    ElToggle
  },
  props: {
    testid: {
      default: 'not-set'
    },
    model: {
      type: Object as PropType<ItemInterface>,
      default: () => {
        return {}
      }
    },
    isLast: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, {emit}) {
    const cssClass = computed(() => {
      let css = 'item flex items-center justify-between cursor-pointer border border-l-4 list-none rounded-sm px-3 py-3'
      if (props.model.selected) {
        css += ' font-bold bg-pink-200 hover:bg-pink-100 selected'
      } else {
        css += " text-gray-500 hover:bg-gray-100";
      }
      if (!props.isLast) {
        css += " border-b-0";
      }

      return css.trim()
    })

    const handleClick = () => {
      emit('selectItem', props.model.id)
    }

    return {
      cssClass,
      handleClick
    }
  }
})
</script>
