import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//引入各个分页组件
const login = () => import('./components/login')
const HomePage = () => import('./components/HomePage')
const Home = () => import('./components/Home')
const commodity = () => import('./components/commodity')


const routes = [					//采坑第一个地方   只能用 routes 来管理路由
	{path : '/',component : login},
	{path : '/HomePage',name : 'HomePage',component : HomePage,children : [
			{path : '/HomePage/Home',name : 'Home',component : Home},
			{path : '/HomePage/commodity',name : 'commodity',component : commodity}
		],redirect : '/HomePage/Home'
	},
	{path : '*',redirect : '/'}
]

export const router = new VueRouter({
	linkActiveClass : "Active",				//用来改变class名
	routes,
	mode : 'history'
})
