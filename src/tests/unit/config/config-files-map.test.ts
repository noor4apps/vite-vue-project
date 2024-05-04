import {configFilesMap} from '@/config/config-files-map'

describe("configFilesMap", () => {
    it('instance should have "mock" key', () => {
        expect(configFilesMap.has("mock")).toBe(true);
    });

    it('instance should have "production" key', () => {
        expect(configFilesMap.has("production")).toBe(true);
    });
});
