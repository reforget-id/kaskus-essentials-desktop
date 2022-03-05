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