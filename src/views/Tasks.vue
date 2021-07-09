<template>
	<div class="tasks">
		<b-form-group 
			label="Nueva tarea"
			label-for="newTask"
			class="font-weight-bold"
			description='Pulsa "/" para acceder directamente'>
			<b-form-input
				id="newTask"
				size="lg"
				v-model="newTask"
				type="text"
				placeholder="Texto de la nueva tarea"
				required>
			</b-form-input>
		</b-form-group>
		<div class="row mb-5">
			<div class="col-12 col-lg-6">
				<div class="todo-tasks mt-5">
					<h2 class="mb-3">Tareas por hacer</h2>
					<Task v-for="task in tasks.filter(task => task.status == 'todo')" v-bind:key="task.text" :text="task.text" :status="task.status"></Task>
				</div>
			</div>
			<div class="col-12 col-lg-6">
				<div class="done-tasks mt-5">
					<h2 class="mb-3">Tareas completadas</h2>
					<Task v-for="task in tasks.filter(task => task.status == 'done')" v-bind:key="task.text" :text="task.text" :status="task.status"></Task>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Task from '@/components/Task.vue'

	export default {
		name: 'Tasks',
		data: () => {
			return {
				newTask: "",
				tasks: [
					{ text: 'Hacer la compra', status: 'done' },
					{ text: 'Pasear al perro', status: 'done' },
					{ text: 'Hacer accesible esta pàgina', status: 'todo' },
					{ text: 'Ir al gimnasio', status: 'todo' }
				]
			}
		},
		mounted: () => {
			document.onkeypress = function (e) {
				e = e || window.event;
				if (e.keyCode == 47) {
					e.preventDefault();
					document.querySelector("#newTask").focus();
				}
			};
		},
		components: {
			Task
		}
	}

</script>
