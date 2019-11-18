import {
    READ_FAVOS,
    READ_TAGS,
} from '../actions'

export default (datas = {favos: []}, action) => {
    switch (action.type) {
        case READ_FAVOS:
            console.log(action);
            var raws = action.response.data
            if(action.renew) {
                datas.favos = []
            }
            var favos = datas.favos
            console.log(favos)
            for(var i=0,l=raws.length;i<l;i++){
                var x = raws[i]
                x.body = JSON.parse(x.body);
                favos.push(x)
            }
            const offset = action.offset
            const tag = action.tag
            return { ...datas, favos, offset, tag}
        case READ_TAGS:
            const tags = action.response.data
            return {...datas, tags }
        default:
            return datas
    }
}