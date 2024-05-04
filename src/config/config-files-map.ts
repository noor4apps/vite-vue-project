// import a reference to our Config interface:
import {ConfigInterface} from './models/Config.interface'

// individual environments configs:
import configMock from './config-files/mock.json'
import configProduction from './config-files/production.json'

// example with javascript Map()
export const configFilesMap: Map<string, ConfigInterface> = new Map<string, ConfigInterface>([
    ["mock", configMock],
    ["production", configProduction],
]);
