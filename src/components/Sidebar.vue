<template>
	<b-sidebar id="sidebar" shadow backdrop>
		<router-link to="/" class="list-group-item list-group-item-action">
			<font-awesome-icon icon="home" class="mr-3"></font-awesome-icon>
			Inicio
		</router-link>
		<router-link to="/tasks" class="list-group-item list-group-item-action">
			<font-awesome-icon icon="list" class="mr-3"></font-awesome-icon>
			Tareas
		</router-link>
		<router-link to="/about" class="list-group-item list-group-item-action">
			<font-awesome-icon icon="info" class="mr-4 ml-2"></font-awesome-icon>
			Información
		</router-link>
    </b-sidebar>
</template>

<script>
	export default {
		name: 'Sidebar'
	}
</script>

<style>
	
</style>