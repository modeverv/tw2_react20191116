import _ from 'lodash'
import {
    READ_FAVOS,
    READ_TAGS,
} from '../actions'

export default (events = {}, action) => {
    switch (action.type) {
        case READ_FAVOS:
            //console.log(action.response.data)
            var raws = action.response.data
            var processed = []
            for(var i=0,l=raws.length;i<l;i++){
                var x = raws[i]
                x.body = JSON.parse(x.body);
                processed.push(x)
            }
            const favos = _.mapKeys(processed, 'id')
            console.log(favos)
            return favos
        case READ_TAGS:
            //console.log(action.response.data)
            const tags = action.response.data
            console.log(tags)
            return tags
        default:
            return events
    }
}