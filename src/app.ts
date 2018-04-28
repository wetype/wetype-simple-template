import { App, wt } from 'wetype'

@App.decor({
    config: {
        mainPage: 'pages/index/index',
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#3ba686',
            navigationBarTitleText: 'Project Wetype',
            navigationStyle: 'default'
        }
    }
})
class APP extends App {
    async onLaunch() {}

    onShow() {}
}
