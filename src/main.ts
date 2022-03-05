import {compose} from '@typed/compose'
import {environment, errors, log, userscripter} from 'userscripter'
import '~lib/prototype'
import '~lib/scope-functions'
import * as CONFIG from '~src/config'
import OPERATIONS from '~src/operations'
import {fields} from '~src/settings/setting-fields'
import STYLESHEETS from '~src/stylesheets'
import {iframe} from '~src/stylesheets/settings-iframe'
import U from '~src/userscript'
import settingsWindow from './stylesheets/settings-window.scss'

const describeFailure = errors.failureDescriber({
    siteName: U.sitename,
    extensionName: U.name,
    location: document.location,
})

GM_config.init({
    id: 'kas-ess-settings',
    title: 'Kaskus Essentials Settings',
    fields: fields as Record<string, Field>,
    css: settingsWindow,
})

GM_registerMenuCommand('Open Settings', () => {
    GM_config.open()
    GM_config.frame?.setAttribute('style', iframe)
})

userscripter.run({
    id: U.id,
    name: U.name,
    initialAction: () => log.log(U.version),
    stylesheets: STYLESHEETS,
    operationsPlan: {
        operations: OPERATIONS,
        interval: CONFIG.OPERATIONS_INTERVAL,
        tryUntil: environment.DOMCONTENTLOADED,
        extraTries: CONFIG.OPERATIONS_EXTRA_TRIES,
        handleFailures: failures => failures.forEach(compose(log.error, describeFailure)),
    },
})

