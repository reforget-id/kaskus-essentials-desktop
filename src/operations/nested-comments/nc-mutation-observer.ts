import replyProperties from '~operations/nested-comments/reply-properties'
import replyReputation from '~operations/nested-comments/reply-reputation'
import singleMultiQuote from '~operations/nested-comments/single-multi-quote'
import {isShowPostURL} from '~src/environment'
import * as SETTING from '~src/settings/setting'
import {CLASS} from '~src/site'

export default (nestedItemContent: Element) => {
    const textAreaReply = nestedItemContent.classSelector(CLASS.textAreaReply)!
    const config = {childList: true, attributes: false}
    const replyObserver = new MutationObserver(listener)

    textAreaReply.classList.add('Hmin-100px', 'Hmax-250px')
    replyObserver.observe(nestedItemContent, config)

    function listener(mutationList: Array<MutationRecord>, observer: MutationObserver) {
        mutationList.forEach((mutation) => {
            if (mutation.target && mutation.addedNodes.length) {
                mutation.addedNodes.forEach((node) => {
                    let reply = node as Element
                    reply.classList?.letIt(it => {
                        if (it.contains(CLASS.nestedbit)) {
                            if (!isShowPostURL) singleMultiQuote(reply)
                            if (SETTING.replyReputation()) replyReputation(reply)
                            replyProperties(reply)
                        } else if (it.contains(CLASS.deletedReply) && !SETTING.removeDeletedPost.no()) {
                            reply.remove()
                        }
                    })
                })

                if (!isShowPostURL) {
                    let moreNested = nestedItemContent.classSelector(CLASS.moreNested)!
                    if (moreNested.innerHTML.isBlank()) observer.disconnect()
                }
            }
        })
    }
}