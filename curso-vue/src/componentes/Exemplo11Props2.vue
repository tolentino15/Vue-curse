<!--SCRIPT-->

<script setup>

    const props = defineProps(['nome', 'idade', 'cidade','vetor','funcao']);

</script>

<!--HTML---->

<template>

<h1>Nome: {{ nome }}</h1>
<h1>Idade: {{ idade }}</h1>
<h1>Cidade: {{ cidade }}</h1>

<ul>

    <li v-for="i of vetor"> {{ i }}</li>

</ul>

<button @click="funcao">Clique</button>
    
</template>