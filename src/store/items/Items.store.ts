import {reactive} from 'vue'
import {ItemsStateInterface} from './models'
import {ItemInterface} from '@/models'

// the items module state
const itemsState = reactive<ItemsStateInterface>({
    loading: false,
    items: []
})

// the items store actions implementation
const actions = {
    // action that we invoke to load the items from an api
    loadItems: async () => {
        // set loading to true and clear current data
        itemsState.loading = true
        itemsState.items = []

        // mock some data
        let mockData: ItemInterface[] = [{
            id: 1,
            name: 'Item 1',
            selected: false
        }, {
            id: 2,
            name: 'Item 2',
            selected: false
        }]

        // let's pretend we called some API end-point
        setTimeout(() => {
            itemsState.items = mockData
            itemsState.loading = false
        }, 1000)
    },

    // action that we'll invoke from our component to select/unselect a special item
    toggleItemSelected: async (id: number) => {
        const item = (itemsState.items || []).find((o) => o.id === id)
        if (item) {
            item.selected = !item.selected
        }
    }
}

// the items store getters implementation, these will be consumed in the components
const getters = {
    get loading() {
        return itemsState.loading
    },
    get items() {
        return itemsState.items
    }
}

// infer the items store interface
export interface ItemsStoreInterface {
    getters: typeof getters
    actions: typeof actions
}

//  hook that will use to consume the items store in other code
export function useItemsStore(): ItemsStoreInterface {

    // return our store instance implementation
    return {
        getters,
        actions
    }
}


