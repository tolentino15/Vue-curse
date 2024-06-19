<!--SCRIPT-->

<script setup>
// VARIAVEL REATIVA
import { onMounted, ref } from 'vue'

let texto = ref('OLA MUNDO!');


//Lifecycle onMounted
onMounted(() =>{

    setTimeout(() => {
        texto.value = 'Alterou!'
    }, 3000); //3 segundos

})

</script>

<!--HTML---->

<template>

<h1>{{ texto }}</h1>

</template>