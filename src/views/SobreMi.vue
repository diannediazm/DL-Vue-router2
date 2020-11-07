<!-- CONTENIDO PARA LA VISTA DE 'SOBRE MÍ' -->
<template>
<div>
    <header class="masthead-about" style="background-image:url('assets/img/about-bg.jpg')">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <div class="site-heading-about">
                        <h1>Sobre mí</h1>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
                <p>Este es un blog dedicado al mundo automotor, en el cual te mostraré las últimas novedades de automóviles, los lanzamientos más recientes y te enseñaremos algunos tips para cuidar tu vehículo.</p>
                <p>Este es un medio independiente. Si te gusta nuestro contenido, ayúdanos en Patreon o haciendo una donación a través de PayPal. Te lo agradeceré mucho.</p>
            </div>
        </div>

    <hr>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <ul class="list-inline text-center">
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
</div>
</template>

<script>
export default {
    name: 'SobreMi'
}
</script>

<style>
.masthead-about {
    background-size: cover;
    width: 100%;
    height: 500px;
    margin-right: 250px;
}
.site-heading-about {
    margin-top: 200px;
}

</style>