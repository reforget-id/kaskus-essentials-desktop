import {log} from 'userscripter'
import * as SETTING from '~src/settings/setting'
import {ID} from '~src/site'
import * as T from '~src/text'

export default () => {
    (document.getElementById(ID.replyMessage) as HTMLTextAreaElement).value = SETTING.quoteText.get()
    log.log(T.Post.getQuotedText)
}