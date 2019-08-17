import { Page, wx, wt, types } from 'wetype-simple'

@Page.decor({
    config: {
        disableScroll: true,
        usingComponents: {
            list: 'list'
        }
    }
})
class Index extends Page {

    @Page.input('inputAbc')
    abc = ''

    list = []
    
    async onLoad() {

    }

    async click() {

    }

}