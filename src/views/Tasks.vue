<template>
	<section id="tasks">
		<div role="section">
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
		</div>
		<div class="row mb-5" role="section">
			<article class="col-12 col-lg-6">
				<div class="todo-tasks mt-5">
					<h2 class="mb-3">Tareas por hacer</h2>
					<Task v-for="task in tasks.filter(task => task.status == 'todo')" v-bind:key="task.id" :task="task" @changed="changeStatus" @deleted="openModal"></Task>
				</div>
			</article>
			<article class="col-12 col-lg-6">
				<div class="done-tasks mt-5">
					<h2 class="mb-3">Tareas completadas</h2>
					<Task v-for="task in tasks.filter(task => task.status == 'done')" v-bind:key="task.id" :task="task" @changed="changeStatus" @deleted="openModal"></Task>
				</div>
			</article>
		</div>
		<b-modal id="confirm" title="Eliminar tarea" ok-title="Borrar" ok-variant="danger" cancel-title="Cancelar" @ok="deleteTask" title-tag="h3" v-if="taskToDelete != 0">
			<p>Seguro que quieres borrar la tarea: "{{ this.tasks.find(task => task.id == this.taskToDelete).text }}"?</p>
		</b-modal>
	</section>
</template>

<script>
	import Task from '@/components/Task.vue'
	import TaskData from '../classes/TaskData.js'

	export default {
		name: 'Tasks',
		data: () => {
			return {
				newTask: "",
				tasks: [],
				taskToDelete: 0
			}
		},
		methods: {
			createTask: function(e) {
				e.preventDefault();
				this.tasks.push(new TaskData(this.newTask));
				this.newTask = "";
			},
			changeStatus(data) {
				this.tasks.find(task => task.id == data.id).status = data.status;
			},
			openModal: function(id) {
				this.taskToDelete = id;
				this.$bvModal.show('confirm');
			},
			deleteTask: function () {
				this.tasks.splice(this.tasks.indexOf(this.tasks.find(task => task.id == this.taskToDelete)), 1);
				this.taskToDelete = 0;
				this.$bvToast.toast("Tarea eliminada", {
					title: "Operación realizada correctamente",
					variant: "success",
					autoHideDelay: 3000
				});
			}
		},
		mounted: function () {
			TaskData.getFromFile()
				.then(response => (this.tasks = response.data))
				.catch(error => {
					// Codigo para funcione en local
					TaskData.getFromFile("/tasks.json").then(response => (this.tasks = response.data));
				});

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
