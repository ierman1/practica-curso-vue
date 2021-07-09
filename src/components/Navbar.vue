<template>
	<b-navbar toggleable="lg" type="light" variant="light">
		<div class="container">
			<b-navbar-brand href="#">Test</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>

				<b-navbar-nav>
					<router-link to="/" class="nav-link">Home</router-link>
					<router-link to="/about" class="nav-link">About</router-link>	
				</b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">

					<b-nav-item-dropdown text="Lang" right>
						<b-dropdown-item href="#">EN</b-dropdown-item>
						<b-dropdown-item href="#">ES</b-dropdown-item>
						<b-dropdown-item href="#">RU</b-dropdown-item>
						<b-dropdown-item href="#">FA</b-dropdown-item>
					</b-nav-item-dropdown>

					<b-nav-item-dropdown text="User" right>
						<b-dropdown-item href="#">
							<font-awesome-icon icon="user" class="mr-2"></font-awesome-icon> Profile
						</b-dropdown-item>
						<b-dropdown-item href="#" variant="danger">
							<font-awesome-icon icon="power-off" class="mr-2"></font-awesome-icon> Sign Out
						</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</div>
	</b-navbar>
</template>

<script>
	export default {
		name: 'Navbar'
	}
</script>

<style>
	.router-link-exact-active {
		font-weight: bold;
		color: rgba(0, 0, 0, .7) !important;
	}
</style>