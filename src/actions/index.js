import axios from 'axios'
const ROOT_URL = '' // production
//const ROOT_URL = 'http://localhost:31234' // develop
const TAGS = 'tags'
const FAVOS = 'favos'
export const READ_TAGS = "READ_TAGS"
export const READ_FAVOS = "READ_FAVOS"

export const readFavos = values => async dispatch => {
    // tag offset offsetを計算しないと
    const tag = values.tag
    // ここに来るまでにtagは決まっているけどoffsetは計算してないと駄目
    var ar_qs = []
    if (values.tag) {
        ar_qs.push("tag=" + encodeURI(values.tag))
    }
    var offset = values.offset
    if (!values.offset) {
        offset = 0
        console.log("offset is not defined")
    }
    console.log(offset)
    ar_qs.push("offset=" + offset)            
    const qs = ar_qs.join("&")
    const response = await axios.get(`${ROOT_URL}/${FAVOS}?${qs}`)
    const renew = values.renew
    dispatch({
        type: READ_FAVOS,
        response,
        tag,
        offset,
        renew
    })
}
export const readTags = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/${TAGS}`)
    dispatch({
        type: READ_TAGS,
        response
    })
}