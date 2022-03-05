import {ID} from '~src/site'

export default (): string => {
    return (document.getElementById(ID.threadID) as HTMLInputElement).value
}