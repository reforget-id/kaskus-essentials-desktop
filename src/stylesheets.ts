import {ALWAYS} from 'userscripter/lib/environment'
import {stylesheet, Stylesheets} from 'userscripter/lib/stylesheets'
import {isOnChannelPage, isOnHomepage, isOnThreadPage} from '~src/environment'
import * as SETTING from '~src/settings/setting'
import animation from './stylesheets/animation.scss'
import hotThread from './stylesheets/hot-thread.scss'
import main from './stylesheets/main.scss'
import thread from './stylesheets/thread.scss'

const STYLESHEETS = {
    main: stylesheet({
        condition: ALWAYS,
        css: main,
    }),
    animation: stylesheet({
        condition: ALWAYS,
        css: animation,
    }),
    thread: stylesheet({
        condition: _ => isOnThreadPage,
        css: thread,
    }),
    hotThread: stylesheet({
        condition: _ => (isOnHomepage || isOnChannelPage) && SETTING.wideHotThread(),
        css: hotThread,
    }),
} as const

// This trick uncovers type errors in STYLESHEETS while retaining the static knowledge of its properties (so we can still write e.g. STYLESHEETS.foo):
const _: Stylesheets = STYLESHEETS
void _

export default STYLESHEETS
