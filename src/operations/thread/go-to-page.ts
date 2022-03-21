import {CLASS} from '~src/site'

export default () => {
    const pagination = document.getElementsByClassName(CLASS.pagination)
    if (pagination.length == 0) return

    const pageURL = pagination[0].getElementsByTagName('a')
    const totalPage = pagination[0].previousElementSibling!.firstChild!
    const totalPageText = totalPage.textContent!.match(/\d+/g)!
    const currentPage = totalPageText[0]
    const lastPage = totalPageText[1]

    setupGoToPage(pagination[0], 0)
    setupGoToPage(pagination[1], 1)

    function setupGoToPage(pagination: Element, index: number) {
        const goToPage = document.createElement('form')
        goToPage.className = 'D(f) Fx(flexOne) Ai(c)'
        goToPage.innerHTML = `
        <input type="number" class="gotopage-input" value="${currentPage}" min="1" max="${lastPage}" required>
        <input type="submit" class="gotopage-button" value="Go">
    `

        pagination.parentNode!.insertBefore(goToPage, pagination)

        const goToPageButton = document.getElementsByClassName('gotopage-button')[index]
        const goToPageInput = goToPageButton.previousElementSibling as HTMLInputElement

        goToPageButton.addEventListener('click', () => {
            (goToPageButton.parentNode as HTMLFormElement).action = pageURL[pageURL.length - 2]
                .href
                .replace(/(?<=\/thread\/\w+\/.+\/)\d+/g, goToPageInput.value)
        })
    }
}