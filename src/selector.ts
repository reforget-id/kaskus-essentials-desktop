export const FORUM = {
    lastPost: 'a[href^="/lastpost/"]',
    firstNewPost: 'a[href$="?goto=newpost"]',
} as const

export const POST = {
    authorSection: '[itemprop="author"]',
    userAvatar: 'img[itemprop="image"]',
    username: 'a[itemprop="url"]',
    userRank: '[itemprop="jobTitle"]',
    datePublished: 'time[itemprop="datePublished"]',
    dateModified: 'time[itemprop="dateModified"]',
    postTitle: '[itemprop="headline"]',
} as const



