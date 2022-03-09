import {log} from 'userscripter'
import URLBuilder from '~src/libs/url-builder'
import {splitPath, URLOpener} from '~src/libs/util'
import * as SELECTOR from '~src/selector'
import * as SETTING from '~src/settings/setting'
import * as SITE from '~src/site'
import * as T from '~src/text'

export default () => {
    const lastPostButton: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(SELECTOR.FORUM.lastPost)

    lastPostButton.forEach((item) => {
        let threadID = splitPath(item.pathname)[1]
        if (item.textContent === ' Go to Last Post ') item.textContent = ' Go to Last Page '

        item.href = 'javascript:void(0);'
        item.removeAttribute('target')
        item.addEventListener('click', () => checkThreadLastPage(threadID))
    })

    function checkThreadLastPage(threadID: string) {
        const openURL = new URLBuilder().path(SITE.PATH.THREAD, threadID, 'thread-name', '500').toString()
        const newTab = SETTING.newTablastPost()

        GM_xmlhttpRequest({
            method: 'GET',
            url: openURL,
            overrideMimeType: 'text/html; charset=UTF-8',
            responseType: 'document',
            binary: false,
            timeout: 0,
            onerror: function () {
                log.log(T.XHR.failedXHR)
                URLOpener(openURL, newTab, true)
            },
            onload: function (res) {
                const postList = (<Document>res.response).getElementsByClassName(SITE.CLASS.postList)
                const lastPost = postList[postList.length - 1]

                if (lastPost != null) {
                    const postID = lastPost.id.matchStartWith('post')!
                    const postURL = new URLBuilder()
                        .path(SITE.PATH.POST, postID)
                        .hash(lastPost.id)
                        .toString()

                    URLOpener(postURL, newTab, true)
                } else {
                    log.log(T.XHR.failedGetText)
                    URLOpener(openURL, newTab, true)
                }
            },
        })
    }
}
