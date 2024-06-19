<!--SCRIPT-->

<script setup>
// VARIAVEL REATIVA
import { ref } from 'vue'

let texto = ref('');

</script>

<!--HTML---->

<template>

<input type="text" v-model="texto">
<p>{{ texto }}</p>

</template>