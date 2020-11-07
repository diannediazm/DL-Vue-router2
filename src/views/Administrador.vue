<template>
    <header class="masthead-adm" style="background-image: url('/assets/img/adm.jpg');">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <div class="post-heading-adm">
                        <h1 class="adm" v-text="titulo"></h1>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Administrador',
    computed: {
        titulo(){
            if (this.$route.params.entrada == 'simple'){
                return 'Bienvenido a la página de Administración'
            } else if (this.$route.params.entrada == 'avanzado'){
                return 'Esta página de administración está en construcción. Intente como administrador simple'
            } else {
                return 'Esta página no existe. Intente como administrador simple'
            }

        },  
    }
}
</script>

<style>
.masthead-adm {
    margin-top: 100px;
    color: white;
    background-size: cover;
    height: 600px;
}
.post-heading-adm {
    margin-top: 100px;
}
</style>