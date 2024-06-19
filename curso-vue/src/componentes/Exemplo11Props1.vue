<!--SCRIPT-->

<script setup>

    import Exemplo11Props2 from './Exemplo11Props2.vue';

    let cidade = ' Recife '

    let cidades = ['São Paulo', 'Recife', 'Rio de janeiro']

    function mensagem(){
        alert('Funcao criada!')
    }

</script>

<!--HTML---->

<template>

    <Exemplo11Props2 nome="Luiz" idade="22" :cidade="cidade" :vetor="cidades" :funcao="mensagem"></Exemplo11Props2>
    
</template>