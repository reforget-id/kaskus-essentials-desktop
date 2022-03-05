export const ID = {
    threadPostList: 'thread_post_list',
    sortWrapper: 'sort-wrapper',
    pagination: 'thread-pagination',
    quickReply: 'quick_reply_wrapper',
    threadID: 'thread_id',
    replyMessage: 'reply-messsage',
    postingButton: 'button-reply',
    smiliesWrapper: 'jsSmiliesWrapper',
    textAreaPost: 'jsReplyTextArea',
    hotThreadColumn: 'hotthread_visualita',
} as const

export const CLASS = {
    header: 'jsNavHeader',
    stickyHeader: 'jsStickyHeader',
    headerOverlay: 'jsNavHeaderOverlay',
    sidebarLeft: 'sidebarLeft',
    sidebarRightInner: 'sidebarRightInner',
    threadPost: 'postItemFirst',
    pagination: 'pagination',
    postList: 'postBody',
    deletedPost: 'moderatedPost',
    deletedReply: 'jsNestedItem',
    pageText: 'pagetext',
    multiQuote: 'jsButtonMultiquote buttonMultiquote',
    reply: 'jsButtonReply buttonReply',
    quoteClass: 'D(ib) Td(n):h Mend(15px) Px(8px) Py(3px) Bdrs(8px) buttonMultiquote',
    nestedWrapper: 'nestedWrapper',
    nestedTrigger: 'jsShowNestedTrigger',
    nestedItemContent: 'jsNestedItemContent',
    nestedbit: 'nestedbit',
    getNestedAD: 'getNestedAD',
    moreNested: 'moreNested',
    loadMore: 'loadMoreAD',
    replyBox: 'simple-reply',
    smallReply: 'small-reply',
    formReply: 'form-reply-message',
    textAreaReply: 'jsNestedReplyTextArea',
    smiliesContainer: 'jsSmiliesContainer',
    smiliesButtonWrapper: 'jsSmilies',
    stickyMultiquoteContainer: 'jsStickyMultiquote',
    stickyMultiquoteSubmit: 'jsStickyMultiquoteCounter',
} as const

export const ATTRIBUTE = {
    replyCount: 'data-replycount',
} as const

export const PATH = {
    HOME: 'home',
    CHANNEL: 'channel',
    FORUM: 'forum',
    THREAD: 'thread',
    POST: 'post',
    LAST_POST: 'lastpost',
    SHOW_POST: 'show_post',
    POST_REPLY: 'post_reply',
} as const

export const PARAMS = {
    referrer: {
        key: 'ref',
        value: {
            singleQuote: 'single-quote',
            notification: 'notification',
            forum: 'threadlist-',
        },
    },
    childID: {
        key: 'child_id',
    },
} as const



