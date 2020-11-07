<!-- CONTENIDO PARA LA VISTA DE RUTAS INEXISTENTES -->
<template>
    <header class="masthead-not" style="background-image: url('/assets/img/chevrolet-blazer.jpg');">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <div class="post-heading-not">
                        <h1><strong>La página que busca no existe</strong></h1>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style>
.masthead-not {
    margin-top: 100px;
    color: white;
    background-size: cover;
    height: 400px;
}
.post-heading-not {
    margin-top: 100px;
}
</style>