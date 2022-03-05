import * as SETTING from '~src/settings/setting'
import * as SITE from '~src/site'

export default (nestedTrigger: HTMLElement) => {
    const replyCount = nestedTrigger.getAttribute(SITE.ATTRIBUTE.replyCount)!
    const maxReply = SETTING.maxReply()

    if (nestedTrigger.classList.contains('open-nc')) {
        if (maxReply == 20) {
            clickIterator()
        } else if (parseInt(replyCount) <= maxReply) {
            clickIterator()
        }
    }

    function clickIterator() {
        if (nestedTrigger.classList.contains(SITE.CLASS.getNestedAD)) {
            nestedTrigger.click()
            setTimeout(clickIterator, 100)
        }
    }
}