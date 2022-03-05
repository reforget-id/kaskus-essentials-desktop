import {CLASS} from '~src/site'

export default () => {
    const container = document.classSelector(CLASS.stickyMultiquoteContainer)!
    const stickyquoteButton = document.classSelector(CLASS.stickyMultiquoteSubmit)!
    const config = {childList: true, characterData: true}
    const buttonObserver = new MutationObserver(listener)

    buttonObserver.observe(stickyquoteButton.firstElementChild!, config)

    function listener(mutationList: Array<MutationRecord>) {
        mutationList.forEach((mutation) => {
            let target = mutation.target as HTMLElement
            let isMultiQuote = (/^Kutip ([2-9]|\d{2}) Balasan$/).test(target.textContent!)

            if (isMultiQuote) {
                container.classList.remove('position-unset')
            } else {
                container.classList.add('position-unset')
            }
        })
    }
}