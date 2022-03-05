import nestedMutationObserver from '~operations/nested-comments/nc-mutation-observer'
import NCScrollMode from '~operations/nested-comments/nc-scroll-mode'
import openNestedComments from '~operations/nested-comments/open-nested-comments'
import * as OPTIONS from '~src/settings/field-options'
import * as SETTING from '~src/settings/setting'
import {fields} from '~src/settings/setting-fields'
import {CLASS} from '~src/site'

export default () => {
    const deletedPostList = document.getElementsByClassName(CLASS.deletedPost)
    const removeDP = GM_config.get(fields.removeDP.name)

    switch (removeDP) {
        case OPTIONS.removeDP.postOnly:
            for (let i = 0; i < deletedPostList.length; i++) {
                let nestedWrapper = deletedPostList[i].classSelector(CLASS.nestedWrapper)
                if (nestedWrapper == null) {
                    deletedPostList[i].remove()
                    i--
                } else {
                    nestedComments(nestedWrapper)
                }
            }
            break
        case OPTIONS.removeDP.includeNC:
            for (let i = 0; i < deletedPostList.length; i++) {
                deletedPostList[i].remove()
                i--
            }
            break
        case OPTIONS.removeDP.no:
            for (let i = 0; i < deletedPostList.length; i++) {
                let nestedWrapper = deletedPostList[i].classSelector(CLASS.nestedWrapper)
                nestedWrapper?.letIt(it => nestedComments(it))
            }
            break
    }

    function nestedComments(nestedWrapper: Element) {
        let nestedItemContent = nestedWrapper.classSelector(CLASS.nestedItemContent)!
        nestedMutationObserver(nestedItemContent)

        if (SETTING.scrollMode()) {
            NCScrollMode(nestedItemContent)
        }

        if (SETTING.openNestedComments.includeDP()) {
            let nestedTrigger = nestedWrapper.classSelector(CLASS.nestedTrigger) as HTMLElement
            nestedTrigger.classList.add('open-nc')
            setTimeout(() => openNestedComments(nestedTrigger), 100)
        }
    }
}