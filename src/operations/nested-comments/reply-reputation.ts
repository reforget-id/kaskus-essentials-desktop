import {CLASS} from '~src/site'

export default (reply: Element) => {
    const reputationCount = reply.classSelector(CLASS.reputationCount)!
    if (reputationCount.textContent == '0') return

    const bodyText = reply.classSelector(CLASS.pageText)!
    const reputationWrapper = document.createElement('div')
    const replyID = reply.id.matchStartWith('post')!

    reputationWrapper.applyIt(function () {
        this.id = `who-give-cendol-wrapper-${replyID}`
        this.className = 'D(f) Ai(c) Py(10px)'
        this.innerHTML = `
            <div class="D(f) Jc(fs) Ai(c) Fld(r) Fx(flexOne) C(c-tertiary) Fz(12px) whoCendolAjax" 
            data-postid="${replyID}">
                <div class="Cur(p)">
                    <span class="Va(m)">Lihat pemberi reputasi</span>
                </div>
            </div>
        `
    })

    bodyText.parentNode!.insertBefore(reputationWrapper, bodyText.nextSibling)
}