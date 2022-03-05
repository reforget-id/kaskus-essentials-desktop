import {log} from 'userscripter'
import * as SETTING from '~src/settings/setting'
import {ID} from '~src/site'
import * as T from '~src/text'

export default () => {
    const postingButton = document.getElementById(ID.postingButton) as HTMLTextAreaElement
    postingButton.addEventListener('click', () => {
        SETTING.quoteText.delete()
        log.log(T.Post.deleteQuotedText)
    })
}