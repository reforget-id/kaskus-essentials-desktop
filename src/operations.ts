import {DOMCONTENTLOADED} from 'userscripter/lib/environment'
import {Operation, operation} from 'userscripter/lib/operations'
import deleteQuotedText from '~operations/delete-quoted-text'
import getQuotedText from '~operations/get-quoted-text'
import lastPostLastPage from '~operations/last-post-last-page'
import newTabLastPost from '~operations/new-tab-last-post'
import redirectShowPost from '~operations/redirect-show-post'
import deletedPost from '~operations/thread/deleted-post'
import fabFormReply from '~operations/thread/fab-form-reply'
import goToPage from '~operations/thread/go-to-page'
import postlist from '~operations/thread/postlist'
import stickyMultiQuote from '~operations/thread/sticky-multi-quote'
import wideHotThread from '~operations/wide-hot-thread'
import {
    hasChildIDParam,
    isFromForum,
    isFromNotification,
    isFromSingleQuote,
    isOnChannelPage,
    isOnForumPage,
    isOnHomepage,
    isOnPostReplyPage,
    isOnThreadPage,
    isShowPostURL,
} from '~src/environment'
import * as SETTING from '~src/settings/setting'

const ALWAYS = true

const OPERATIONS: ReadonlyArray<Operation<any>> = [
    operation({
        description: 'Tampilan Hot Thread yang lebih lebar',
        condition: () => (isOnHomepage || isOnChannelPage) && SETTING.wideHotThread(),
        action: wideHotThread,
        deferUntil: DOMCONTENTLOADED,
    }),
    operation({
        description: 'Go to Last Post menuju ke context post',
        condition: () => isShowPostURL && hasChildIDParam && isFromForum && SETTING.lastPost.contextPost(),
        action: redirectShowPost,
    }),
    operation({
        description: 'Go to Last Post menuju halaman terakhir',
        condition: () => isOnForumPage && SETTING.lastPost.lastPage(),
        action: lastPostLastPage,
        deferUntil: DOMCONTENTLOADED,
    }),
    operation({
        description: 'Buka "Go to Last Post" di tab baru',
        condition: () => isOnForumPage && SETTING.newTablastPost() && !SETTING.lastPost.lastPage(),
        action: newTabLastPost,
        deferUntil: DOMCONTENTLOADED,
    }),
    operation({
        description: 'Dapatkan daftar post lalu buat tombol single quote',
        condition: () => isOnThreadPage,
        action: postlist,
        deferUntil: DOMCONTENTLOADED,
    }),
    operation({
        description: 'Menentukan aksi terhadap deleted post',
        condition: () => isOnThreadPage,
        action: deletedPost,
        deferUntil: DOMCONTENTLOADED,
    }),
    operation({
        description: 'Redirect single post tanpa reply ke thread',
        condition: () => isShowPostURL && !hasChildIDParam && isFromNotification,
        action: redirectShowPost,
    }),
    operation({
        description: 'Masukkan teks quote ke dalam kotak reply',
        condition: () => isOnPostReplyPage && isFromSingleQuote,
        action: getQuotedText,
        deferUntil: DOMCONTENTLOADED,
    }),
    operation({
        description: 'Menghapus teks quote yang disimpan setelah dipost',
        condition: () => isOnPostReplyPage && isFromSingleQuote,
        action: deleteQuotedText,
        deferUntil: DOMCONTENTLOADED,
    }),
    operation({
        description: 'Menggunakan tombol floating button untuk kotak form reply',
        condition: () => isOnThreadPage && SETTING.fabFormReply(),
        action: fabFormReply,
        deferUntil: DOMCONTENTLOADED,
    }),
    operation({
        description: 'Sticky multiquote button muncul saat quote 2 post atau lebih',
        condition: () => isOnThreadPage,
        action: stickyMultiQuote,
        deferUntil: DOMCONTENTLOADED,
    }),
    operation({
        description: 'Setup fitur Go to Page',
        condition: () => isOnThreadPage && SETTING.goToPage(),
        action: goToPage,
        deferUntil: DOMCONTENTLOADED,
    }),
]

export default OPERATIONS
