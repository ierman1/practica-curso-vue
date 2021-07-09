import Vue from 'vue'
import VueRouter from 'vue-router'
import Tasks from '../views/Tasks.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Tasks',
		component: Tasks
	},
	{
		path: '/about',
		name: 'About',
		component: About
	}
]

const router = new VueRouter({
	routes: routes,
	mode: 'history',
	base: '/practica-curso-vue/',
	linkExactActiveClass: "active"
})

export default router
