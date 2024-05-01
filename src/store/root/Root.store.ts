import {useItemsStore} from '@/store/items'

// hook that returns our root store instance and will allow us to consume our app store from our components
export function useAppStore() {

    return {
        itemsStore: useItemsStore()
        // additional domain store modules will be eventually added here
    }
}

// infer store interface from useAppStore return type
export type RootStoreInterface = ReturnType<typeof useAppStore>
