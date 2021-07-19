<template>
	<div class="tasks">
		<h2 class="mb-5 font-weight-bold">Gestor de tareas</h2>
		<form v-on:submit="createTask">
			<div class="d-flex align-items-center">
				<b-form-group 
					label="Nueva tarea"
					label-for="newTask"
					class="font-weight-bold flex-grow-1 pr-2"
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
				<b-button variant="primary" size="lg" style="margin-top: -8px;" type="submit">
					<span class="sr-only">
						Crear nueva tarea
					</span>
					<font-awesome-icon icon="plus"></font-awesome-icon>
				</b-button>
			</div>
		</form>
		<div class="row mb-5">
			<div class="col-12 col-lg-6">
				<div class="todo-tasks mt-5">
					<h2 class="mb-3">Tareas por hacer</h2>
					<Task v-for="task in tasks.filter(task => task.status == 'todo')" v-bind:key="task.text" :task="task" @changed="changeStatus" @deleted="deleteTask"></Task>
				</div>
			</div>
			<div class="col-12 col-lg-6">
				<div class="done-tasks mt-5">
					<h2 class="mb-3">Tareas completadas</h2>
					<Task v-for="task in tasks.filter(task => task.status == 'done')" v-bind:key="task.text" :task="task" @changed="changeStatus" @deleted="deleteTask"></Task>
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
					{ id: 1, text: 'Hacer la compra', status: 'done' },
					{ id: 2, text: 'Pasear al perro', status: 'done' },
					{ id: 3, text: 'Hacer accesible esta pàgina', status: 'todo' },
					{ id: 4, text: 'Ir al gimnasio', status: 'todo' }
				]
			}
		},
		methods: {
			createTask: function(e) {
				e.preventDefault();

				this.tasks.push({
					id: Date.now(),
					text: this.newTask,
					status: 'todo'
				});

				this.newTask = "";
			},
			changeStatus(data) {
				this.tasks.find(task => task.id == data.id).status = data.status;
			},
			deleteTask: function (id) {
				this.tasks.splice(this.tasks.indexOf(this.tasks.find(task => task.id == id)), 1);
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
