import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tasks from '../views/Tasks.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: { title: 'Inicio' },
		component: Home
	},
	{
		path: '/tasks',
		name: 'Tasks',
		meta: { title: 'Tareas' },
		component: Tasks
	},
	{
		path: '/about',
		name: 'About',
		meta: { title: 'Información' },
		component: About
	}
]

const router = new VueRouter({
	routes: routes,
	mode: 'history',
	base: '/practica-curso-vue/',
	linkExactActiveClass: "active"
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
