export const openNC = {
    postOnly: 'Hanya post',
    includeDP: 'Termasuk post yang dihapus',
    no: 'Tidak',
} as const

export const removeDP = {
    postOnly: 'Hanya post tanpa nested comment',
    includeNC: 'Post beserta nested commentnya',
    no: 'Tidak',
} as const

export const scrollBehavior = {
    instant: 'instant',
    smooth: 'smooth',
} as const

export const lastPostAction = {
    lastpage: 'Halaman terakhir',
    contextPost: 'Context Post',
    default: 'Default',
} as const