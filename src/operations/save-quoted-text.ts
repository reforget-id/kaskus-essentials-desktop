import {log} from 'userscripter'
import URLBuilder from '~lib/url-builder'
import * as SETTING from '~src/settings/setting'
import * as SITE from '~src/site'
import * as T from '~src/text'

export default (threadID: string) => {
    const overlay = document.classSelector(SITE.CLASS.headerOverlay)!
    const openURL = new URLBuilder().path(SITE.PATH.POST_REPLY, threadID)
    const ref = SITE.PARAMS.referrer

    overlay.classList.add('showit')
    log.log(T.XHR.createXHR)

    GM_xmlhttpRequest({
        method: 'GET',
        url: openURL.toString(),
        overrideMimeType: 'text/html; charset=UTF-8',
        responseType: 'document',
        binary: false,
        timeout: 0,
        onerror: function () {
            clearQuoteCookie()
            overlay.classList.remove('showit')
            alert(T.XHR.cantConnect)
            log.log(T.XHR.failedXHR)
        },
        onload: function (res) {
            const quotedText = ((<Document>res.response)
                .getElementById(SITE.ID.replyMessage) as HTMLTextAreaElement)
                ?.value ?? ''

            if (quotedText.isNotBlank()) {
                log.log(T.XHR.successGetText)
                SETTING.quoteText.save(quotedText)
                clearQuoteCookie()
                window.location.href = openURL.params([ref.key, ref.value.singleQuote]).toString()
            } else {
                overlay.classList.remove('showit')
                alert(T.XHR.somethingWrong)
                log.log(T.XHR.failedGetText)
                clearQuoteCookie()
            }
        },
    })

    function clearQuoteCookie() {
        document.cookie = `kaskus_multiquote_${threadID}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    }
}