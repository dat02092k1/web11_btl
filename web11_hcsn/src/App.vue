<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/UI/Header.vue"
import Sidebar from "./components/UI/Sidebar.vue"
import Main from "./components/UI/Main.vue"

export default {
  name: "App",
  components: {
    Header,
    Sidebar,
    Main
  }
}
</script>

<template>
<div class="container">
  <Sidebar/>
  <Header />
  <Main/>
</div>
</template>

<style scoped>
@import url(./css/index.css);
</style>
