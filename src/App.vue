<template>
    <div id="app">
        <header class="container-sm mt-4 py-3 border-bottom">
            <b-button v-b-toggle.sidebar variant="dark">
                <font-awesome-icon icon="bars"></font-awesome-icon>
            </b-button>
            <h1 class="font-weight-bold text-center">Proyecto VUE</h1>
            <div></div>
        </header>
        <main class="container pt-5">
            <aside>
                <Sidebar></Sidebar>
            </aside>
            <router-view/>
        </main>
        <footer class="bg-secondary text-white text-center p-3">
            Germán Pérez Bordera · <a class="text-white" href="mailto:germanperezb98@gmail.com">germanperezb98@gmail.com</a>
        </footer>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
    
    #app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        font-family: Nunito;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 {

    }

    main {
        flex-grow: 1;
    }

    footer {
        width: 100%;
    }
</style>

<script>
    import Sidebar from '@/components/Sidebar.vue'

    export default {
        name: 'App',
        components: {
            Sidebar
        }
    }
</script>

<style>

</style>
