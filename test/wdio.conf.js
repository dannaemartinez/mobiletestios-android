import { setOptions } from 'expect-webdriverio'
import { browser, $, $$, expect } from '@wdio/globals'

export const config = {
    // ...
    before () {
        setOptions({ wait: 5000 })
    },
    specs: [
        'test/*.spec.js',
    ],
    // ...
    capabilities: [{
        'maxInstances': 1,
        'browserName': 'chrome',
        'goog:chromeOptions': {
          w3c: true,
          args: ['--headless'],
        },
      }, ],
    sync: true,
    waitforTimeout: 10000,
    services: [
        ['selenium-standalone']
    ],
    runner: 'local',
}
