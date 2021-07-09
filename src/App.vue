<template>
    <div id="app">
        <header>
            <Navbar></Navbar>
        </header>
        <main class="container pt-5">
            <router-view/>
        </main>
        <footer class="bg-secondary text-white text-center p-3">
            Footer
        </footer>
    </div>
</template>

<style>
    #app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex-grow: 1;
    }

    footer {
        width: 100%;
    }
</style>

<script>
    import Navbar from '@/components/Navbar.vue'

    export default {
        name: 'App',
        components: {
            Navbar
        }
    }
</script>

<style>

</style>
