<!-- CONTENIDO PARA LA VISTA DE PORTADA -->
<template>
 <div> 
    <header class="masthead-portada" style="background-image:url('assets/img/home-bg.jpg');">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <div class="site-heading-portada">
                        <h1>V8</h1><span class="subheading">Noticias y reseñas de automóviles</span></div>
                </div>
            </div>
        </div>
    </header>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-lg-8">
                <div class="post-preview">
                    <router-link to="/post/1">
                        <h2 class="post-title"><strong>Chevrolet presenta la totalmente nueva Blazer</strong></h2>
                        <h3 class="post-subtitle">Llega&nbsp;como la primera SUV deportiva de la marca</h3>
                    </router-link>
                </div>
                <hr>
            </div>
        </div>
    </div>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <ul class="text-center">
                        <li class="list-inline-item"><span class="fa-stack fa-lg"><font-awesome-icon :icon="['fas','circle']" size="xs" /><font-awesome-icon :icon="['fab','twitter']" size="2x"/></span></li>
                        <li class="list-inline-item"><span class="fa-stack fa-lg"><font-awesome-icon :icon="['fas','circle']" size="xs" /><font-awesome-icon :icon="['fab','facebook']" size="2x"/></span></li>
                        <li class="list-inline-item"><span class="fa-stack fa-lg"><font-awesome-icon :icon="['fas','circle']" size="xs" /><font-awesome-icon :icon="['fab','github']" size="2x"/></span></li>
                    </ul>
                    <p class="text-muted copyright">Copyright&nbsp;©&nbsp;V8 - 2018</p>
                </div>
            </div>
        </div>
    </footer>
</div>  
</template>

<script>
export default {
    name: 'Portada'
}
</script>

<style>
.masthead-portada {
    margin-top: 80px;
    height: 400px;
    background-repeat: no-repeat;
    margin-left: 250px;
}
.site-heading-portada {
    color: white;
    margin-top: 170px;
}
.post-preview, .post-title, .post-subtitle {
    margin-top: 50px;
    margin-left: 35px;
    color: darkgrey;
}
</style>