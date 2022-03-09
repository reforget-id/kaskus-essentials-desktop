export const url = {
    get url() {
        return window.location
    },
    href: () => url.url.href as string,
    path: () => url.url.pathname as string,
    params: () => url.url.search as string,
    hash: () => url.url.hash as string,
}

export function splitPath(pathname: string) {
    return pathname.split('/').filter(v => v)
}

export function URLOpener(url: string, newtab: boolean = false, foreground: boolean = true) {
    const openInTabOption = {
        active: foreground,
        insert: true,
        setParent: true,
    }

    if (newtab) {
        GM_openInTab(url, openInTabOption)
    } else {
        window.location.href = url
    }
}