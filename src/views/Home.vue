<template>
	<section id="home">
		<article>
			<h2 class="font-weight-bold mb-3">¿Qué es esto?</h2>
			<p>
				Una página web realizada con VueJS y un proyecto para demostrar los conocimientos adquiridos. La web consta de 3 secciones:
			</p>
			<ul>
				<li>Esta misma página, un pequeño resumen de donde estás.</li>
				<li><router-link to="/tasks">Tareas</router-link>, un pequeño gestor de tareas simples.</li>
				<li><router-link to="/about">Información</router-link>, un resumen de información del autor.</li>
			</ul>
		</article>
		<article class="mt-5">
			<h2 class="font-weight-bold mb-3">¿Por qué esto?</h2>
			<p>
				Esta página es una versión extendida de uno de los ejercicios propuestos, presentada como proyecto final del curso. El objetivo es plasmar los conocimientos sobre Vue/Bootstrap + accesibilidad adquiridos.
			</p>
		</article>
	</section>
</template>

<script>

	export default {
		name: 'Home',
		components: {
		}
	}

</script>
