import axios from 'axios'
const ROOT_URL = 'http://127.0.0.1:31234/'
const TAGS = 'tags'
const FAVOS = 'favos'
export const READ_TAGS = "READ_TAGS"
export const READ_FAVOS = "READ_FAVOS"

export const readFavos = values => async dispatch => {
    var ar_qs = []
    if(values.tag) {
        ar_qs.push("tag=" + encodeURI(values.tag))
    }
    if(values.offset) {
        ar_qs.push("offset=" + values.offset * 10)
    } else {
        ar_qs.push("offset=" + "0")
    }
    const qs = ar_qs.join("&")
    const response = await axios.get(`${ROOT_URL}/${FAVOS}?${qs}`)
    dispatch({type: READ_FAVOS, response})
}
export const readTags = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/${TAGS}`)
    dispatch({type: READ_TAGS, response})
}
