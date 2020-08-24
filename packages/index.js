// 整个包的入口
import Button from './button'
import Dialog from './dialog'
import './fonts/font.scss'
const components = [Button, Dialog]
const install = function (Vue) {
    console.log('123')
    console.log(Vue)
    // 全局注册所有的组件
    components.forEach((item) => {
        Vue.component(item.name, item)
    })
}
// 判断是否是直接引入文件 如果是，就不用调用Vue.use() 这个地方不是很懂
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default {install}