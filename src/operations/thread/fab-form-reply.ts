import * as SITE from '~src/site'

export default () => {
    const quickReply = document.getElementById(SITE.ID.quickReply)!
    const overlay = document.classSelector(SITE.CLASS.headerOverlay)!
    const fab = document.createElement('div')

    quickReply.classList.add('D(n)', 'animate__animated', 'animate__fast')
    fab.className = 'D(f) Cur(p) Jc(c) Ai(c) Pos(f) fab-form-reply'
    fab.innerHTML = '<i class="fa fa-plus Fz(20px)"></i>'
    quickReply.parentNode!.insertBefore(fab, quickReply)

    fab.addEventListener('click', () => {
        fab.classList.toggle('click-effect')
        overlay.classList.toggle('showit')
        quickReply.classList.letIt(it => {
            it.toggle('sticky-form')
            it.toggle('animate__fadeInDown')
        })
    })
}