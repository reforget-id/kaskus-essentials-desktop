import {CLASS} from '~src/site'

export default (reply: Element) => {
    const firstChild = reply.firstElementChild!
    const head = firstChild.querySelector(':scope > div:nth-of-type(2) > div')!
    const author = head.firstElementChild!
    const bodyText = reply.classSelector(CLASS.pageText)!
    const postActions = reply.classSelector(CLASS.voteWrapper)!.parentElement!
    const replyButton = reply.classSelector(CLASS.reply)!
    const container = document.createElement('div')
    const borderBottom = 'Bdb(borderSolidLightGrey)'
    const borderTop = 'Bdt(borderSolidLightGrey)'

    switch (author.children.length) {
        case 3:
            author.children[1].classList.add('Mstart-0px')
            container.prepend(author.children[0], author.children[1])
            break
        case 4:
            author.children[2].classList.add('Mstart-0px', 'Mtop-5px')
            container.prepend(author.children[0], author.children[1], author.children[2])
            break
    }

    container.classList.add('Fx(flexOne)')
    firstChild.classList.add(borderBottom, 'Pb-0px')
    head.classList.add(borderBottom, 'Pb-10px')
    author.prepend(container)
    bodyText.classList.add('reply-body')
    postActions.classList.add(borderTop)
    replyButton.classList.add('D(ib)', 'Py(3px)')
}