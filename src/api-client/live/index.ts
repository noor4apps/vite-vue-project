import {ApiClientInterface, LocalizationApiClientModel} from '../models'
import {itemsApiClient} from './items'
import {config} from '@/config'

// create an instance of our main ApiClient that wraps the live child clients
const apiLiveClient: ApiClientInterface = {
    items: itemsApiClient,
    localization: new LocalizationApiClientModel(config.localization.apiClientOptions)
}

// export our instance
export {
    apiLiveClient
}
