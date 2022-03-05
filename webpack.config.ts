import * as AppRootPath from 'app-root-path'
import {createWebpackConfig, DEFAULT_BUILD_CONFIG, DEFAULT_METADATA_SCHEMA} from 'userscripter/build'
import METADATA from './metadata'
import * as CONFIG from './src/config'
import * as SITE from './src/site'
import U from './src/userscript'

//const EXTENSIONS = ['.d.ts', '.ts', '.tsx', '.mjs', '.js', '.jsx', '.scss', '.css', '.svg']

//const webpackConfig =
export default createWebpackConfig({
    buildConfig: {
        ...DEFAULT_BUILD_CONFIG({
            rootDir: AppRootPath.path,
            id: U.id,
            now: new Date(),
        }),
        sassVariables: {CONFIG, SITE},
        mode: 'production',
    },
    metadata: METADATA,
    metadataSchema: DEFAULT_METADATA_SCHEMA,
    env: process.env,
})