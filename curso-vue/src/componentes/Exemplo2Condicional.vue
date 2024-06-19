<!--SCRIPT---->

<script setup>

let exibir = false;
let media = 6


</script>

<!--HTML---->

<template>

<!--SE O EXIBIR FOR TRUE ELE IMPRIME-->
<h1 v-if="exibir">Hello World!!</h1>

<!--p*3-->
<p v-if="media >= 7">Aprovado</p>
<p v-else-if="media >= 5">Em exame</p>
<p v-else>Reprovado</p>

</template>