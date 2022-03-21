import nestedMutationObserver from '~operations/nested-comments/nc-mutation-observer'
import NCScrollMode from '~operations/nested-comments/nc-scroll-mode'
import openNestedComments from '~operations/nested-comments/open-nested-comments'
import scrollToButton from '~operations/nested-comments/scroll-to-button'
import saveQuotedText from '~operations/save-quoted-text'
import threadID from '~operations/thread/get-thread-id'
import multiQuoteIconText from '~operations/thread/multi-quote-icon-text'
import * as SETTING from '~src/settings/setting'
import {CLASS} from '~src/site'

export default (post: Element) => {
    const multiQuoteButton = post.classSelector(CLASS.multiQuote)!
    const parentNode = multiQuoteButton.parentNode!
    const singleQuoteButton = document.createElement('a')
    const postID = post.id.matchStartWith('post')
    const clickAction = `quote('${threadID()}', '${postID}');return false;`
    const nestedWrapper = post.classSelector(CLASS.nestedWrapper)

    multiQuoteIconText(multiQuoteButton)

    singleQuoteButton.applyIt(function () {
        this.href = 'javascript:void(0);'
        this.className = CLASS.quoteClass + ' Fz(16px)'
        this.setAttribute('onclick', clickAction)
        this.innerHTML = ` 
            <i class="fas C(c-secondary) fa-comment Mend(2px)"></i>
            <span class="C(c-secondary) Fz(12px)">Single Quote</span>
        `
        this.addEventListener('click', () => saveQuotedText(threadID()))
    })

    parentNode.prepend(singleQuoteButton)

    nestedWrapper?.letIt(it => {
        const nestedTrigger = it.classSelector(CLASS.nestedTrigger) as HTMLElement
        const nestedItemContent = it.classSelector(CLASS.nestedItemContent)!
        if (post.classList.contains('open-nc')) {
            nestedTrigger.classList.add('open-nc')
        }

        scrollToButton(nestedTrigger, nestedItemContent)
        nestedMutationObserver(nestedItemContent)

        if (SETTING.scrollMode()) {
            NCScrollMode(nestedItemContent)
        }

        if (!SETTING.openNestedComments.no()) {
            setTimeout(() => openNestedComments(nestedTrigger), 100)
        }
    })
}