import {ApiClientInterface} from './models'
import {apiMockClient} from './mock'
import {apiLiveClient} from './live'

import {config} from '@/config'

let apiClient: ApiClientInterface;

if (config.apiClient.type === "live") {
    apiClient = apiLiveClient;
} else {
    // default is always apiMockClient
    apiClient = apiMockClient
}

export {
    apiClient
}
