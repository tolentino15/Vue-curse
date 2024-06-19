<!--SCRIPT-->

<script setup>

let nomes = ['luiz', 'paulo', 'maria', 'joana']


</script>

<!--HTML---->

<template>

<!--LISTA-->
<ul>

    <li v-for="i in nomes">{{ i }}</li>

</ul>

</template>