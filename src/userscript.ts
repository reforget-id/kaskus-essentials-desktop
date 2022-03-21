export default {
    id: 'kaskus-essentials-desktop',
    name: 'Kaskus Essentials (Desktop)',
    version: '0.9.1',
    description: 'Untuk pengalaman ngaskus yang lebih baik',
    author: 'reforget-id (ffsuperteam)',
    hostname: 'www.kaskus.co.id',
    sitename: 'Kaskus',
    namespace: 'kaskus-essentials-desktop',
    runAt: 'document-start',
    license: 'GPL-3.0-or-later; https://github.com/reforget-id/kaskus-essentials-desktop/blob/main/LICENSE',
    icon: 'https://raw.githubusercontent.com/reforget-id/kaskus-essentials-desktop/main/icon.svg',
    homepageURL: 'https://github.com/reforget-id/kaskus-essentials-desktop',
    supportURL: 'https://github.com/reforget-id/kaskus-essentials-desktop/wiki',
    updateURL: 'https://raw.githubusercontent.com/reforget-id/kaskus-essentials-desktop/main/dist/kaskus-essentials-desktop.meta.js',
    downloadURL: 'https://raw.githubusercontent.com/reforget-id/kaskus-essentials-desktop/main/dist/kaskus-essentials-desktop.user.js',
    require: 'https://openuserjs.org/src/libs/sizzle/GM_config.js',
    grant: [
        'GM_setValue',
        'GM_getValue',
        'GM_deleteValue',
        'GM_openInTab',
        'GM_xmlhttpRequest',
        'GM_registerMenuCommand',
    ],
} as const
