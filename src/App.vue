<template>
  <div>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
        <div class="container"><a class="navbar-brand">V8</a><button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div
                class="collapse navbar-collapse" id="navbarResponsive">
                <div class="navbar-nav ml-auto">
                      <router-link class="nav-link" :to="{name:'Portada'}">Portada</router-link>
                      <router-link class="nav-link" :to="{name:'SobreMi'}">Sobre mi</router-link>
                      <router-link class="nav-link" to="/contacto">Contacto</router-link>
                      <router-link class="nav-link" to="/post/1">Blog</router-link>
                </div>
            </div>
        </div>
    </nav>
    <router-view></router-view>
  </div>
  
</template>

<script>

export default {

}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  
}
#menu-v8 a{
  text-shadow: 1px 1px #000;
}
</style>
