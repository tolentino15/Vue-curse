<!--SCRIPT-->

<script setup>

let texto = '<p style= "color:red">aprendendo v-html<p>'

</script>

<!--HTML-->

<template>
<!--CONVERTE EM CODIGO HTML-->
<div v-html="texto"></div>

<div>{{ texto }}</div>

</template>