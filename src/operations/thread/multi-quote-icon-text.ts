export default (multiQuoteButton: Element) => {
    const icon = multiQuoteButton.querySelector('i')
    const text = multiQuoteButton.querySelector('span')

    icon?.classList?.letIt(it => {
        if (it.contains('fa-quote-right')) {
            it.remove('fa-quote-right')
            it.add('fa-comments')
        }
    })

    if (text?.textContent === 'Kutip') {
        text.textContent = 'Multi Quote'
    }
}
