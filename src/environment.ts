import '~lib/prototype'
import {splitPath, url} from '~src/libs/util'
import * as SITE from './site'

const ref = SITE.PARAMS.referrer

function matchFirstPath(path: string): boolean {
    const pathname = splitPath(url.path())
    return pathname.isNotEmpty() ? pathname[0] == path : '' == path
}

function matchParam(key: string, value: string): boolean {
    const params = new URL(url.href()).searchParams
    return params.get(key)?.startsWith(value) ?? false
}

function hasParam(param: string): boolean {
    const params = new URL(url.href()).searchParams
    return params.has(param)
}

export const isOnHomepage = [
    SITE.PATH.HOME,
    '',
].some(matchFirstPath)

export const isOnThreadPage = [
    SITE.PATH.THREAD,
    SITE.PATH.POST,
    SITE.PATH.LAST_POST,
].some(matchFirstPath)

export const isOnChannelPage = matchFirstPath(SITE.PATH.CHANNEL)
export const isOnForumPage = matchFirstPath(SITE.PATH.FORUM)
export const isOnPostReplyPage = matchFirstPath(SITE.PATH.POST_REPLY)
export const isThreadURL = matchFirstPath(SITE.PATH.THREAD)
export const isPostURL = matchFirstPath(SITE.PATH.POST)
export const isLastPostURL = matchFirstPath(SITE.PATH.LAST_POST)
export const isShowPostURL = matchFirstPath(SITE.PATH.SHOW_POST)
export const isFromSingleQuote = matchParam(ref.key, ref.value.singleQuote)
export const isFromNotification = matchParam(ref.key, ref.value.notification)
export const isFromForum = matchParam(ref.key, ref.value.forum)
export const hasChildIDParam = hasParam(SITE.PARAMS.childID.key)
