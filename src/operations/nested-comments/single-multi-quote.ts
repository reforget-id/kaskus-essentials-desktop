import saveQuotedText from '~operations/save-quoted-text'
import threadID from '~operations/thread/get-thread-id'
import {CLASS} from '~src/site'

export default (reply: Element) => {
    const replyButton = reply.classSelector(CLASS.reply)!
    const parentNode = replyButton.parentNode!
    const singleQuoteButton = document.createElement('a')
    const multiQuoteButton = document.createElement('a')
    const replyID = reply.id.matchStartWith('post')!
    const clickAction = `quote('${threadID()}', '${replyID}');return false;`

    singleQuoteButton.applyIt(function () {
        this.href = 'javascript:void(0);'
        this.className = CLASS.quoteClass
        this.setAttribute('onclick', clickAction)
        this.innerHTML = ` 
            <i class="fas C(c-secondary) fa-comment Mend(2px)"></i>
            <span class="C(c-secondary) Fz(12px)">Single Quote</span>
        `
        this.addEventListener('click', () => saveQuotedText(threadID()))
    })

    multiQuoteButton.applyIt(function () {
        this.href = 'javascript:void(0);'
        this.className = CLASS.quoteClass + ' jsButtonMultiquote'
        this.setAttribute('onclick', clickAction)
        this.innerHTML = ` 
            <i class="fas C(c-secondary) fa-comments Mend(2px)"></i>
            <span class="C(c-secondary) Fz(12px)">Multi Quote</span>
        `
    })

    parentNode.prepend(singleQuoteButton, multiQuoteButton)
}