import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
	{
		path: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: '/home/:id',
		name: "Adviser",
		component: () => import('../views/Adviser.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
