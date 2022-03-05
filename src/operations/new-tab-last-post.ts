import * as SELECTOR from '~src/selector'

export default () => {
    const lastPost: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(SELECTOR.FORUM.lastPost)

    lastPost.forEach((item) => {
        item.target = '_blank'
    })
}