import {CLASS, ID} from '~src/site'

export default (nestedItemContent: Element) => {
    const replyBox = nestedItemContent.classSelector(CLASS.replyBox)!
    const smallReply = nestedItemContent.classSelector(CLASS.smallReply)!
    const smiliesBox = document.getElementById(ID.smiliesWrapper)!
    const config = {childList: true, attributes: false}
    const itemContentObserver = new MutationObserver(listener)

    nestedItemContent.parentElement!.classList.add('translate-0px')
    nestedItemContent.classList.add('scroll-y', 'Hmax-75vh')
    replyBox.classList.add('Bgc(c-lightgrey-2)', 'sticky-bottom')
    smallReply.classList.add('sticky-bottom')
    smiliesBox.parentElement!.classList.add('translate-0px')
    smiliesBox.classList.add('nc-smilies-box')

    itemContentObserver.observe(nestedItemContent, config)

    function listener(mutationList: Array<MutationRecord>, observer: MutationObserver) {
        mutationList.forEach((mutation) => {
            if (mutation.target && mutation.addedNodes.length) {
                mutation.addedNodes.forEach((node) => {
                    let formReply = node as Element
                    if (formReply.classList?.contains(CLASS.formReply)) {
                        formReply.classList.add('Bgc(c-lightgrey-2)', 'sticky-bottom')
                        observer.disconnect()
                    }
                })
            }
        })
    }
}