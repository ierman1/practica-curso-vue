<template>
	<b-alert show :variant="status == 'done' ? 'success' : 'info'">
		{{ text }}
	</b-alert>
</template>

<script>
	export default {
		name: 'Task',
		props: ['text', 'status']
	}
</script>

<style>
	
</style>