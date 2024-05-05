import {ApiClientInterface, LocalizationApiClientModel} from '../models'
import {itemsApiClient} from './items'
import {config} from '@/config'

// create an instance of our main ApiClient that wraps the mock child clients
const apiMockClient: ApiClientInterface = {
    items: itemsApiClient,
    localization: new LocalizationApiClientModel(config.localization.apiClientOptions)
}

// export our instance
export {
    apiMockClient
}
