import {
    READ_FAVOS,
    READ_TAGS,
} from '../actions'

export default (datas = {}, action) => {
    switch (action.type) {
        case READ_FAVOS:
            //console.log(action.response.data)
            var raws = action.response.data
            var favos = []
            for(var i=0,l=raws.length;i<l;i++){
                var x = raws[i]
                x.body = JSON.parse(x.body);
                favos.push(x)
            }
            return { ...datas, favos}
        case READ_TAGS:
            //console.log(action.response.data)
            const tags = action.response.data
            //console.log(tags)
            return {...datas, tags }
        default:
            return datas
    }
}