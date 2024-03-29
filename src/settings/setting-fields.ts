import {URLOpener} from '~lib/util'
import * as OPTIONS from '~src/settings/field-options'

const maxReplyArray = Array.from(Array(19), (v, i) => i + 1).map(String)
maxReplyArray.push('20+')

const kaskusThreadURL = 'https://kask.us/iLYNX'
const githubURL = 'https://github.com/reforget-id/kaskus-essentials-desktop'
const wikiURL = githubURL + '/wiki'
const reportURL = githubURL + '/issues'

export const fields = { //Record<string, Field>
    wideHotThread: {
        name: 'wideHotThread',
        section: ['', 'Homepage & Channel'],
        label: 'Tampilkan Hot Thread menjadi lebih lebar ',
        labelPos: 'right',
        type: 'checkbox',
        default: true,
    },
    lastPostAction: {
        name: 'lastPostAction',
        section: ['', 'Forum'],
        label: 'Tombol "Go to Last Post" menuju ke ',
        labelPos: 'left',
        type: 'select',
        options: [
            OPTIONS.lastPostAction.lastpage,
            OPTIONS.lastPostAction.contextPost,
            OPTIONS.lastPostAction.default,
        ],
        default: OPTIONS.lastPostAction.default,
    },
    newTabLastPost: {
        name: 'newTabLastPost',
        label: 'Buka "Go to Last Post" di tab baru',
        labelPos: 'right',
        type: 'checkbox',
        default: true,
    },
    removeDP: {
        name: 'removeDP',
        section: ['', 'Thread'],
        label: 'Sembunyikan post yang dihapus ',
        labelPos: 'left',
        type: 'select',
        options: [
            OPTIONS.removeDP.postOnly,
            OPTIONS.removeDP.includeNC,
            OPTIONS.removeDP.no,
        ],
        default: OPTIONS.removeDP.postOnly,
    },
    fabFormReply: {
        name: 'fabFormReply',
        label: 'Gunakan floating action button untuk kotak quick reply ',
        labelPos: 'right',
        type: 'checkbox',
        default: true,
    },
    goToPage: {
        name: 'goToPage',
        label: 'Aktifkan fitur Go to Page ',
        labelPos: 'right',
        type: 'checkbox',
        default: false,
    },
    openNC: {
        name: 'openNC',
        section: ['', 'Nested Comments'],
        label: 'Buka nested comments otomatis saat loading ',
        labelPos: 'left',
        type: 'select',
        options: [
            OPTIONS.openNC.postOnly,
            OPTIONS.openNC.includeDP,
            OPTIONS.openNC.no,
        ],
        default: OPTIONS.openNC.postOnly,
    },
    maxReply: {
        name: 'maxReply',
        label: 'Hanya buka nested comments dengan balasan ≤ ',
        labelPos: 'left',
        type: 'select',
        options: maxReplyArray,
        default: '12',
    },
    scrollBehavior: {
        name: 'scrollBehavior',
        label: 'Scroll behavior untuk tombol scroll ',
        labelPos: 'left',
        type: 'select',
        options: [
            OPTIONS.scrollBehavior.instant,
            OPTIONS.scrollBehavior.smooth,
        ],
        default: OPTIONS.scrollBehavior.instant,
    },
    scrollModeNC: {
        name: 'scrollModeNC',
        label: 'Tampilkan nested comments dalam mode scroll ',
        labelPos: 'right',
        type: 'checkbox',
        default: true,
    },
    replyReputation: {
        name: 'replyReputation',
        label: 'Tampilkan pemberi reputasi pada reply ',
        labelPos: 'right',
        type: 'checkbox',
        default: true,
    },
    kaskusThread: {
        section: ['', 'Support'],
        label: 'Kaskus Thread',
        type: 'button',
        click: () => URLOpener(kaskusThreadURL, true, true),
    },
    github: {
        label: 'Github',
        type: 'button',
        click: () => URLOpener(githubURL, true, true),
    },
    wiki: {
        label: 'Wiki',
        type: 'button',
        click: () => URLOpener(wikiURL, true, true),
    },
    reportIssue: {
        label: 'Report an Issue',
        type: 'button',
        click: () => URLOpener(reportURL, true, true),
    },
}
