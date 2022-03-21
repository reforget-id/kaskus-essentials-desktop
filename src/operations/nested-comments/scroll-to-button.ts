import * as SETTING from '~src/settings/setting'
import {CLASS} from '~src/site'

export default (nestedTrigger: HTMLElement, nestedItemContent: Element) => {
    const loadMore = nestedItemContent.classSelector(CLASS.loadMore)!
    const bottomContainer = document.createElement('div')
    const scrollToBottom = document.createElement('div')
    const scrollToTop = document.createElement('div')
    const scrollConfig: ScrollIntoViewOptions = {
        behavior: 'auto',
        block: 'center',
        inline: 'nearest',
    }

    if (SETTING.scrollBehavior.smooth()) {
        nestedItemContent.classList.add('scroll-smooth')
        scrollConfig.behavior = 'smooth'
    }

    scrollToBottom.className = 'Mstart(a) Mend(10px) Cur(p) D(n)'
    scrollToBottom.innerHTML = `
        <span class="C(c-blue) Mend(10px)">Scroll to bottom</span> 
        <i class="far C(c-blue-dark) fa-angle-down"></i>
    `

    scrollToTop.className = 'Mstart(a) Mend(10px) Cur(p) My(a) P(10px) D(n)'
    scrollToTop.innerHTML = `
        <span class="C(c-blue) Mend(10px)">Scroll to top</span> 
        <i class="far C(c-blue-dark) fa-angle-up"></i>
    `

    nestedTrigger.parentNode!.append(scrollToBottom)
    bottomContainer.classList.add('D(f)')
    nestedItemContent.insertBefore(bottomContainer, loadMore)
    bottomContainer.prepend(loadMore, scrollToTop)

    nestedTrigger.addEventListener('click', () => {
        setTimeout(() => {
            scrollToBottom.classList.toggle('showit')
            scrollToTop.classList.toggle('showit')
        }, 500)
    })

    scrollToBottom.addEventListener('click', () => {
        if (SETTING.scrollMode()) {
            nestedItemContent.scrollTop = nestedItemContent.scrollHeight - nestedItemContent.clientHeight
        } else {
            scrollToTop.scrollIntoView(scrollConfig)
        }
    })

    scrollToTop.addEventListener('click', () => {
        if (SETTING.scrollMode()) {
            nestedItemContent.scrollTop = 0
        } else {
            scrollToBottom.scrollIntoView(scrollConfig)
        }
    })
}
