<template>
	<section id="about">
		<article>
			<h2 class="font-weight-bold">Información sobre el autor</h2>
			<table class="table mt-4">
				<thead>
					<tr>
						<th scope="col">Nombre</th>
						<th scope="col">Email de contacto</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td scope="row">Germán Pérez Bordera</td>
						<td>
							<a href="mailto:germanperezb98@gmail.com" class="font-weight-bold">germanperezb98@gmail.com</a>
						</td>
					</tr>
				</tbody>
			</table>
		</article>
		<article class="mt-5">
			<h2 class="font-weight-bold">Tecnologías usadas</h2>
			<table class="table mt-4">
				<thead>
					<tr>
						<th scope="col">Logo</th>
						<th scope="col">Nombre</th>
						<th scope="col">Versión</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td scope="row">
							<img src="@/assets/vue_logo.png" alt="Logo VueJS" height="50">
						</td>
						<td>VueJS</td>
						<td>2.6.14</td>
					</tr>
					<tr>
						<td scope="row">
							<img src="@/assets/bootstrapvue_logo.png" alt="Logo Bootstrap-Vue" height="50">
						</td>
						<td>Bootstrap-Vue</td>
						<td>2.21.2</td>
					</tr>
					<tr>
						<td scope="row">
							<img src="@/assets/fontawesome_logo.png" alt="Logo Fontawesome" height="50">
						</td>
						<td>Fontawesome</td>
						<td>5.15.3</td>
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
