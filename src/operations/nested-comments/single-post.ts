import nestedMutationObserver from '~operations/nested-comments/nc-mutation-observer'
import replyProperties from '~operations/nested-comments/reply-properties'
import replyReputation from '~operations/nested-comments/reply-reputation'
import * as SETTING from '~src/settings/setting'
import {CLASS} from '~src/site'

export default () => {
    const nestedItemContent = document.classSelector(CLASS.nestedItemContent)
    if (nestedItemContent == null) return

    const replies = nestedItemContent.getElementsByClassName(CLASS.nestedbit)
    const deletedReplies = nestedItemContent.getElementsByClassName(CLASS.deletedReply)
    const length = replies.length

    for (let i = 0; i < length; i++) {
        if (SETTING.replyReputation()) replyReputation(replies[i])
        replyProperties(replies[i])
    }

    for (let i = 0; i < deletedReplies.length; i++) {
        if (!SETTING.removeDeletedPost.no()) deletedReplies[i].remove()
    }

    nestedMutationObserver(nestedItemContent)
}