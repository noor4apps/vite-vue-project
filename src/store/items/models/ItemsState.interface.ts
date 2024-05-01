import {ItemInterface} from '@/models/items'

/**
 * @name ItemsStateInterface
 * @description Interface represents the item state
 */
export interface ItemsStateInterface {
    loading: boolean
    items: ItemInterface[]
}
