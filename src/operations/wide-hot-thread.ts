import * as SITE from '~src/site'

export default () => {
    const sidebarLeft = document.classSelector(SITE.CLASS.sidebarLeft)!
    const sidebarRightInner = document.classSelector(SITE.CLASS.sidebarRightInner)!

    sidebarRightInner.insertBefore(sidebarLeft, sidebarRightInner.children[2])

}