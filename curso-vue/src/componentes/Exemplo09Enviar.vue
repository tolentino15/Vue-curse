<!--SCRIPT-->

<script setup>

    function validaformulario(event){
        alert('Formulario Enviado');        

        event.preventDefault(); //nao funcionou ???????
    }

</script>

<!--HTML---->

<template>

    <form action="https://www.google.com.br/?hl=pt-BR" @submit="validaformulario()">
            <input type="submit" value="Enviar">
    </form>
    
</template>