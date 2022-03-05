import {splitPath, url} from '~lib/util'
import singleQuote from '~operations/thread/single-quote'
import {CLASS, PATH} from '~src/site'

export default () => {
    const postList = document.getElementsByClassName(CLASS.postList)
    const length = postList.length
    const firstPath = splitPath(url.path())[0]
    let targetIndex = -1

    switch (firstPath) {
        case PATH.THREAD:
            for (let i = 0; i < length; i++) {
                postList[i].classList.add('open-nc')
                singleQuote(postList[i])
            }
            break
        case PATH.POST:
            const postID = splitPath(url.path())[1]
            for (let i = 0; i < length; i++) {
                if (postList[i].id == 'post' + postID) {
                    targetIndex = i
                    break
                }
            }
            targetPost(targetIndex)
            break
        case PATH.LAST_POST:
            targetIndex = length - 1
            targetPost(targetIndex)
            break
    }

    function targetPost(targetIndex: number) {
        for (let i = 0; i < length; i++) {
            if (i < (targetIndex - 2) || i >= targetIndex) {
                postList[i].classList.add('open-nc')
            }
            singleQuote(postList[i])
        }
    }
}