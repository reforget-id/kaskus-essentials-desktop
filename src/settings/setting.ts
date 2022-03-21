import * as OPTIONS from '~src/settings/field-options'
import {fields} from '~src/settings/setting-fields'

const quoteField = 'quotedText'

export const wideHotThread = () => GM_config.get(fields.wideHotThread.name) as boolean
export const newTablastPost = () => GM_config.get(fields.newTabLastPost.name) as boolean
export const fabFormReply = () => GM_config.get(fields.fabFormReply.name) as boolean
export const goToPage = () => GM_config.get(fields.goToPage.name) as boolean
export const maxReply = () => parseInt(<string>GM_config.get(fields.maxReply.name))
export const scrollMode = () => GM_config.get(fields.scrollModeNC.name) as boolean
export const replyReputation = () => GM_config.get(fields.replyReputation.name) as boolean

export const quoteText = {
    save: (text: string) => GM_setValue(quoteField, text),
    get: () => GM_getValue(quoteField),
    delete: () => GM_deleteValue(quoteField),
}

export const openNestedComments = {
    postOnly: () => GM_config.get(fields.openNC.name) == OPTIONS.openNC.postOnly,
    includeDP: () => GM_config.get(fields.openNC.name) == OPTIONS.openNC.includeDP,
    no: () => GM_config.get(fields.openNC.name) == OPTIONS.openNC.no,
}

export const removeDeletedPost = {
    postOnly: () => GM_config.get(fields.removeDP.name) == OPTIONS.removeDP.postOnly,
    includeNC: () => GM_config.get(fields.removeDP.name) == OPTIONS.removeDP.includeNC,
    no: () => GM_config.get(fields.removeDP.name) == OPTIONS.removeDP.no,
}

export const scrollBehavior = {
    instant: () => GM_config.get(fields.scrollBehavior.name) == OPTIONS.scrollBehavior.instant,
    smooth: () => GM_config.get(fields.scrollBehavior.name) == OPTIONS.scrollBehavior.smooth,
}

export const lastPost = {
    lastPage: () => GM_config.get(fields.lastPostAction.name) == OPTIONS.lastPostAction.lastpage,
    contextPost: () => GM_config.get(fields.lastPostAction.name) == OPTIONS.lastPostAction.contextPost,
    default: () => GM_config.get(fields.lastPostAction.name) == OPTIONS.lastPostAction.default,
}

