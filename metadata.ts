import {Metadata} from 'userscript-metadata'
import {BuildConfig} from 'userscripter/build'

import U from './src/userscript'

export default function (_: BuildConfig): Metadata {
    return {
        name: U.name,
        version: U.version,
        description: U.description,
        author: U.author,
        match: [
            `https://${U.hostname}/*`,
        ],
        namespace: U.namespace,
        license: U.license,
        icon: U.icon,
        homepageURL: U.homepageURL,
        supportURL: U.supportURL,
        require: U.require,
        run_at: U.runAt,
        grant: U.grant,
    }
}
