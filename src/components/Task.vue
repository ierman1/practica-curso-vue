<template>
	<b-alert show :variant="variant">
		<div class="d-flex justify-content-between align-items-center">
			<span>{{ task.text }}</span>
			<b-button-group>
				<b-button v-if="task.status == 'todo'" :variant="variant" v-on:click="emitChange('done')">
					<span class="sr-only">
						Cambiar estado a 'finalizada'
					</span>
					<font-awesome-icon icon="arrow-right"></font-awesome-icon>
				</b-button>
				<b-button v-if="task.status == 'done'" :variant="variant" v-on:click="emitChange('todo')" data-toggle="tooltip">
					<span class="sr-only">
						Cambiar estado a 'pendiente'
					</span>
					<font-awesome-icon icon="arrow-left"></font-awesome-icon>
				</b-button>
				<b-button :variant="'outline-' + variant" v-on:click="emitRemoval">
					<span class="sr-only">
						Eliminar tarea
					</span>
					<font-awesome-icon icon="trash"></font-awesome-icon>
				</b-button>
			</b-button-group>
		</div>
	</b-alert>
</template>

<script>
	export default {
		name: 'Task',
		props: ['task'],
		data: function() {
			return {
				variant: this.task.status == 'done' ? 'success' : 'info'
			};
		},
		methods: {
			emitRemoval: function () {
				this.$emit('deleted', this.task.id);
			},
			emitChange: function (newStatus) {
				this.$emit('changed', {id: this.task.id, status: newStatus});
			}
		},
	}
</script>

<style>
	
</style>