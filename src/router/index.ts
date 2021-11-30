import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppMain from '@/layout/AppMain/index.vue'
const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'AppMain',
		component: AppMain
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/layout/Login/index.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

router.beforeEach(({ name }) => {
	console.log(name)
})
export default router
