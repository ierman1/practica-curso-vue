<template>
	<section id="about">
		<article>
			<h2 class="font-weight-bold">Información sobre el autor</h2>
			<table class="table mt-4">
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Email de contacto</th>
						<th>¿Busco trabajo?</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Germán Pérez Bordera</td>
						<td>
							<a href="mailto:germanperezb98@gmail.com">germanperezb98@gmail.com</a>
						</td>
						<td>
							<span class="sr-only">Sí</span>
							<font-awesome-icon icon="check"/>
						</td>
					</tr>
				</tbody>
			</table>
		</article>
	</section>
</template>

<script>

	export default {
		name: 'About',
		components: {
		}
	}

</script>
