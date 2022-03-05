import URLBuilder from '~lib/url-builder'
import {splitPath, url} from '~lib/util'
import * as SITE from '~src/site'

export default () => {
    const postID = splitPath(url.path())[1]
    window.location.href = new URLBuilder()
        .path(SITE.PATH.POST, postID)
        .hash(url.hash())
        .toString()
}