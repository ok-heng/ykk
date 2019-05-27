import App from '../App'

const Home = r => require.ensure([], () => r(require('../views/home')), 'Home')
const Category = r => require.ensure([], () => r(require('../views/category')), 'Category')
const Detail = r => require.ensure([], () => r(require('../views/detail')), 'Detail')


export default [{
    path: '/',
    component: App,
    children: [
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/category',
            //name: 'category',
            component: Category,
        },
        {
            path: '/detail',
            //name: 'detail',
            component: Detail
        }
    ]
}]
