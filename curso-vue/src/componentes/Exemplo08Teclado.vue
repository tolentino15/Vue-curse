<!--SCRIPT-->

<script setup>

    function mensagem(){
        alert('Executando a funcao!')
    }

</script>

<!--HTML---->

<template>

    <input type="text" @keyup.enter="mensagem()">
    
</template>